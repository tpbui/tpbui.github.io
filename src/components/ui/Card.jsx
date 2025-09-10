import { cx } from "../../utils/cx";

export default function Card({ children, className }) {
  return (
    <div className={cx("card", className)}>
      {children}
    </div>
  );
}