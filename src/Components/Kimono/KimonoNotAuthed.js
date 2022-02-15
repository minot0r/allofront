import { useSelector } from "react-redux";

export default function KimonoNotAuthed(props) {
  let { children } = props;
  let loggedIn = useSelector((state) => state.auth.loggedIn);
  return !loggedIn ? <>{children}</> : null;
}
