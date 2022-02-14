import {
  KimonoAuthed,
  KimonoButton,
  KimonoHello,
  KimonoImage,
} from "../Components/Kimono";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/reducers/auth";
import logo from "../logo.png";

export default function Account() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user?.name);
  return (
    <KimonoAuthed>
      <KimonoImage className={"disappear-turn-slow"} img={logo} />
      <KimonoHello name={name} />
      <KimonoButton onClick={() => {
          dispatch(logout());
      }} className={"danger-bg"}>Se déconnecter</KimonoButton>
    </KimonoAuthed>
  );
}
