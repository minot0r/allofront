import { useSelector } from "react-redux";
import Login from "../Login/Login";

export default function KimonoAuthed({ children, reverse }) {
  let loggedIn = useSelector((state) => state.auth.loggedIn);
  if (reverse && loggedIn) return <>{children}</>;
  return loggedIn ? <>{children}</> : <Login />;
}
