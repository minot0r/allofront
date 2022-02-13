import { useSelector } from "react-redux";
import Login from "../Login/Login";

export default function KimonoAuthed({ children }) {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return loggedIn ? <>{children}</> : <Login />;
}
