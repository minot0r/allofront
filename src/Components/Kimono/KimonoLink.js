import { Link } from "react-router-dom";
import "./Kimono.css";

export default function KimonoLink(props) {
  const { className, wrapWith, to, loading, ...rest } = props;
  const button = <Link to={to} disabled={loading} className={"kimono-button " + (className || "")} {...rest} />
  return button;
}
