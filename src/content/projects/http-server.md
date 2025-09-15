# Introduction
When I first started this project, my understanding of HTTP was limited to using it in applications through RESTful APIs, and I wasn't that familiar with these concepts. I was diving into the server-side logic that had always been abstracted away from me. Apache makes it all look effortless, but building one from scratch taught me just how much is happening under the hood. 

> This project has exposed me to **concurrent network programming in C**, deepened my understanding of a **typical application-layer network protocol**, pushed me to apply **solid software engineering practices** in a mid-scale project, and taught me to make **thoughtful design decisions** to deliver a fairly robust application.

# The Goal

> Simply enough, the goal is to recreate a simplified Apache within a month.

## Functional Requirement
1. Handle HTTP and HTTPS requests
2. Support persistent connections and pipelining
3. Process dynamic content via /cgi/ scripts

## Non-functional requirement
1. Scale to multiple concurrent clients using I/O multiplexing
2. Handle malformed requests without crashing the server
3. Fair scheduling of connections

# The Groundwork

## Understanding HTTP
First of all, I need to understand how an HTTP request and HTTP response looks like from the [RFC 2616](https://www.ietf.org/rfc/rfc2616.txt) in order to parse it correctly. 

> On a side note, RFC (Request for Comments) is essentially a formal specification, but not a guarantee. It’s a guideline for interoperability, and real-world implementations don’t always follow it to the letter. In practice, engineers can have some room to customize based on the specific needs of the application.

## Setting Achievable Milestones
**1. Baseline: Echo Server**

- Set up TCP connection with client
- Handle multiple concurrent clients
- Send back to the client their own request

**2. MVP: HTTP/1.1 Core**

- Implement request parsing to support GET, HEAD, POST
- Enable persistent connections and basic error handling

**3. Finish: HTTPS & CGI**

- Add a TLS/HTTPS endpoint
- Support /cgi/ dynamic content

# Key Design Choice

## The Core Logic

1. **How to set up a connection with a client from an application?**

Luckily, the C socket library is made for exactly this kind of situation. On Unix-like system, a socket is basically a file descriptor where we can read to / From the application’s point of view, this is all handled by the operating system’s TCP/IP stack, which hands us back a file descriptor. From there, all we programmers do is use the correct functions to get back a file descriptor, write to that file descriptor, and hope the message makes it safely to the other side :)

2. **How much memory should we allocate for each request?**

If we try to detect the “end” of a request by waiting for some special symbol, what happens if that symbol never arrives? We can’t fully rely on the client to behave nicely. So a workaround is to cap the maximum size you're willing to accept and give back an error message otherwise. This is where flexibility meets reality: you can’t accommodate every possible case, and sometimes the correct engineering choice is simply to say no.

Another key non-functional requirement is fairness: we need to serve clients without letting one dominate. Imagine one client sends a huge message while another sends just a few bytes. If we process the large request all the way to the end before touching the small one, the shorter request suffers unnecessary delay. To avoid this bias, it might be a better idea not to process a single request in one go. Instead, we can introduce the concept of a working buffer: a fixed chunk size representing how many bytes we’re willing to read from a client’s socket at a time before moving on to the next client. Of course, this design introduces more complexity. We need extra memory to maintain metadata for each client, e.g., things like how much data we’ve already read, where we are in parsing, and whether we’re waiting for more input. Requests will likely span multiple working buffers, so careful book-keeping is essential to stitch everything back together correctly.

3. **When should we process a request?**

Several options are on the table, such as queuing requests, queuing responses, or serving them one by one, but I chose to process requests one at a time. The main reason was simplicity: handling a single request makes it much easier to free up memory once it’s done. If I had gone with a queued approach, I would have needed some FIFO data structure to keep track of the current request pointers, and freeing those up properly would quickly become messy. When under time pressure, it might be wise to choose the easiest approach that you're confident in to make things work and leave experimentation for later.

4. **How should we parse a request?**

As far as we're concerned, this is the flesh of the application. The parser. That gives me sleepless nights to debug :) I decided to build it the intuitive way as a finite state machine. The idea is to read the request byte by byte, keep track of the current state, and let the state machine decide what comes next (valid request, incomplete request spanning multiple buffers, error, etc.). While this may not be the most sophisticated implementation, it’s a simple design that (1) makes debugging easier, (2) aborts the request where it fails at the earliest, and (3) provides fine-grained control with room for customization. I learning nothing here but being patience and attention to detail (it's a quite annoying task to be honest >:)), making sure my implementation aligns exactly with what’s specified in the RFC.


## The Edge Cases

Let’s take a closer look at a couple of requests that can go wrong.

**1. The header size**

What happens if the client sends a header that’s way too long? We would need to cap the maximum size you’re willing to handle, otherwise a malicious client could send gigabytes of header data and crash your server.

Example (header too long):

```
GET / HTTP/1.1\r\n
Host: example.com[+ thousands of extra characters ...]
\r\n
```

**2. Missing \r\n to mark end of headers**

HTTP headers must end with an empty line (\r\n\r\n). If that never appears, our server doesn’t know where headers stop and body begins.

Example (missing CRLF):
```
GET /index.html HTTP/1.1\r\n
Host: example.com   <-- missing \r\n\r\n here
```

**3. Missing Content-Length header**

Some requests (like POST with a body) require a Content-Length header. If it’s missing, our parser might wait forever for data that never comes.

Example (missing Content-Length):
```
POST /submit HTTP/1.1\r\n
Host: example.com\r\n
\r\n
{ "name": "Alice" }
```

**4. Body where it shouldn’t exist**

Certain methods, like GET or HEAD, should not include a body. If they do, we should ignore it or reject the request.

```
GET /search?q=hello HTTP/1.1\r\n
Host: example.com\r\n
\r\n
unexpected-body-data
```

**5. Malformed headers**

Headers need to follow the Key: Value format. If the colon is missing or the line is garbled, the request is invalid.

Example (bad header format):
```
GET / HTTP/1.1\r\n
Host example.com\r\n   <-- missing colon
User-Agent\r\n         <-- missing value
\r\n
```

And there are plenty more edge cases out there. What I personally did is testing on an Apache server and see how these requests are handled to gain more insights. For the requests that expected to fail to due the current server's capacity, it's a good practice to document them to remind ourselves and other team members of these limits.

# Software Engineer Practice

By the end of this project, I’ve grown not only in my understanding of computer networking concepts but also in applying the practices needed to truly own a software project. Some of the key things I did include:

**1. Project Setup & Organization**
- Wrote my own Makefile for build automation
- Organized the codebase into modules and header files for clarity and maintainability
- Added Doxygen-style comments for functions, large code sections, and files to improve readability and documentation

**2. Testing & Validation**
- Validate server's response against expected response using Python testing script
- Built load testing tools to evaluate concurrency and performance
- Documented the limitations of the server to set clear expectations

**3. Debugging & Observability**
- Implemented multi-level logging (INFO, WARNING, DEBUG):
  + Logged to the terminal for debugging specific failing requests
  + Logged to a file for identifying broader failure patterns
- Used logging extensively to debug state transitions in the parser’s finite state machine and catch tricky edge cases

**4. Reliability & Resource Management**
- Tracked open file descriptors, memory allocations, and timeouts to prevent leaks and resource exhaustion

# My Survival Kit
- [Beej’s Guide to Network Programming](https://beej.us/guide/bgnet/pdf/bgnet_usl_c_1.pdf)
- [IBM documentation on Nonblocking I/O and select based servers](https://www.ibm.com/docs/en/ssw_ibm_i_74/rzab6/xnonblock.htm)
- [Computer Systems: A Programmer’s Perspective](https://csapp.cs.cmu.edu/)
- [HTTP RFC 2616](https://www.ietf.org/rfc/rfc2616.txt)