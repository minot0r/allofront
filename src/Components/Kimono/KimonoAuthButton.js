import { useSelector } from "react-redux";
import KimonoButton from "./KimonoButton";
import KimonoLink from "./KimonoLink";
import "./Kimono.css";

export default function KimonoAuthButton(props) {
  const {
    className,
    onClick,
    children,
    ...otherProps
  } = props;
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  if(!loggedIn) {
    return <KimonoLink className={"danger-bg"}>
        🔒 Connectez-vous pour accèder
    </KimonoLink>
    }
  return (
      <KimonoButton
        className={className}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </KimonoButton>
  );
}