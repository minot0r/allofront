import { useSelector } from "react-redux";
import Login from "../Login/Login";

export default function KimonoAuthed(props) {
  let { children } = props;
  let loggedIn = useSelector((state) => state.auth.loggedIn);
  return loggedIn ? <>{children}</> : <Login />;
}
