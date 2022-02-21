import {
  KimonoAuthed,
  KimonoButton,
  KimonoButtons,
  KimonoCenter,
  KimonoHello,
  KimonoImage,
  KimonoLink,
  KimonoNavBox,
} from "../Components/Kimono";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/reducers/auth";
import "./Account.css";
import logo from "../logo.png";
import Register from "../Components/Register/Register";
import KimonoNotAuthed from "../Components/Kimono/KimonoNotAuthed";

export default function Account() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user?.name);
  const admin = useSelector((state) => state.auth.user?.admin);
  let [open, setOpen] = useState(false);
  return (
    <div className="account-container">
      <KimonoAuthed>
        {admin && (
          <KimonoNavBox
            to={"/admin"}
            title={"Administration"}
            icon={""}
            className={"warning-bg"}
            buttons={
              <KimonoButtons>
                <KimonoLink to="/admin/current" className={"danger-bg"}>
                  Créneaux en cours
                </KimonoLink>
                <KimonoButton className={"warning-bg"}>Admin</KimonoButton>
              </KimonoButtons>
            }
          >
            <p>Accède au menu d'administration</p>
          </KimonoNavBox>
        )}
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
      <KimonoNotAuthed>
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
      </KimonoNotAuthed>
    </div>
  );
}
