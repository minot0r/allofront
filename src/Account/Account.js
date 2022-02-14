import {
  KimonoAuthed,
  KimonoButton,
  KimonoCenter,
  KimonoHello,
  KimonoImage,
} from "../Components/Kimono";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/reducers/auth";
import "./Account.css";
import logo from "../logo.png";
import Register from "../Components/Register/Register";

export default function Account() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user?.name);
  let [open, setOpen] = useState(false);
  return (
    <div className="account-container">
      <KimonoAuthed>
        <KimonoImage className={"disappear-turn-slow"} img={logo} />
        <KimonoHello name={name} />
        <KimonoButton
          onClick={() => {
            dispatch(logout());
          }}
          className={"danger-bg"}
        >
          Se déconnecter
        </KimonoButton>
      </KimonoAuthed>
      <KimonoAuthed reverse>
        <KimonoCenter tiny width={"80%"}>
          <KimonoButton
            onClick={() => {
              setOpen(true);
            }}
            className={"reverse success"}
          >
            Je n'ai pas de compte
          </KimonoButton>
        </KimonoCenter>
        <Register open={open} setOpen={setOpen} />
      </KimonoAuthed>
    </div>
  );
}
