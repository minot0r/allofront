import { useSelector } from "react-redux";
import KimonoLink from "./KimonoLink";
import "./Kimono.css";

export default function KimonoAuthLink(props) {
  const {
    className,
    onClick,
    children,
    to,
    ...otherProps
  } = props;
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  if(!loggedIn) {
    return <KimonoLink to={"/compte"} className={"danger-bg"}>
        🔒 Connectez-vous pour accèder
    </KimonoLink>
    }
  return (
      <KimonoLink
        className={className}
        onClick={onClick}
        to={to}
        {...otherProps}
      >
        {children}
      </KimonoLink>
  );
}