import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/reducers/auth";
import { KimonoInput, KimonoSubmit } from "../Components/Kimono";
import "./Login.css";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-header-title">
          {loggedIn
            ? `Bienvenue ${user.name}!`
            : "Vous n'êtes pas encore connecté 😞"}
        </h1>
      </div>
      <div className="login-form">
        <form>
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
          <KimonoSubmit
            onClick={(e) => {
              e.preventDefault();
              dispatch(login(username, password));
            }}
            className="primary-bg"
            value="Se connecter"
          />
        </form>
      </div>
    </div>
  );
}
