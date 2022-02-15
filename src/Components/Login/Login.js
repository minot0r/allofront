import React, { useState } from "react";
import { ReCAPTCHA } from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/reducers/auth";
import { KimonoInput, KimonoLoading, KimonoSubmit } from "../Kimono";
import "./Login.css";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="login-container">
        <div className="login-header">
          <h1 className="login-header-title primary">
            {loggedIn
              ? `Bienvenue ${user.name}!`
              : "Vous n'êtes pas encore connecté 😞"}
          </h1>
        </div>
        <div className="login-form">
          <form>
            {!loading ? (
              <>
                <KimonoInput
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="NOM D'UTILISATEUR"
                />
                <KimonoInput
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="MOT DE PASSE"
                />
              </>
            ) : (
              <KimonoLoading />
            )}
            <KimonoSubmit
              onClick={(e) => {
                e.preventDefault();
                dispatch(login(username, password));
              }}
              className="primary-bg"
              value="Se connecter"
              loading={loading}
            />
          </form>
        </div>
    </div>
  );
}
