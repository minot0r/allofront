import { Link } from "react-router-dom";
import "./Kimono.css";

export default function KimonoNavBox(props) {
  const { className, title, children, footer, to, ...otherProps } = props;

  return (
    <Link to={to} className={"kimono-box " + (className || "")} {...otherProps}>
      <div className="kimono-box-title">
        <h3>{title}</h3>
      </div>
      <div className="kimono-box-content">{children}</div>
      {footer && <div className="kimono-box-footer">{footer}</div>}
    </Link>
  );
}
