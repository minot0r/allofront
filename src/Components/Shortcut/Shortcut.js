import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { KimonoLink } from "../Kimono";
import './Shortcut.css';

export default function Shortcut() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  let loggedIn = useSelector((state) => state.auth.loggedIn);
  let user = useSelector((state) => state.auth.user);
  const color = loggedIn ? "transparent-bg" : "danger-bg";
  return (
    <div className={"shortcut-container" + (path === "compte" || path === "admin" ? " hidden" : "")}>
      <KimonoLink className={color} to={"/compte"}>
        {loggedIn ? `🧑 ${user.name.split(" ")[0]}` : "🔑 Connexion"}
      </KimonoLink>
    </div>
  );
}
