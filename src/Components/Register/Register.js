import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { ADD_NOTIFICATION } from "../../Redux/reducers/notification";
import AuthService from "../../Redux/services/auth";
import { createMessage } from "../../Redux/services/message";
import { KimonoButton, KimonoInput, KimonoLoading } from "../Kimono";
import "./Register.css";

export default function Register({ open, setOpen }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registering, setRegistering] = useState(false);
  const dispatch = useDispatch();

  const isLow = (val) => {
    return val?.length < 4;
  };

  const viewIsLow = (val) => {
    return val?.length > 0 && isLow(val);
  };

  const getClass = (val) => {
    if (viewIsLow(val)) return "danger-bg";
    if (!isLow(val)) return "success-bg";
  };

  useEffect(() => {
    if (username != null)
      setUsername(username.replace(/[^a-zA-Z0-9_]/, "").toLowerCase());
  }, [username, setUsername]);
  return (
    <BottomSheet
      open={open}
      snapPoints={({ minHeight }) => minHeight}
      onDismiss={() => setOpen(false)}
    >
      <div className="register-container">
        <h1 className="success">Crée ton compte en 30s chrono ⏱️</h1>
        <p>1, 2, 3... TOP ! 🏁</p>
        {!registering ? (
          <form>
            <KimonoInput
              type={"text"}
              value={name}
              className={getClass(name)}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Ton p'tit nom (ex: Némo Demarquay)"}
            />
            {viewIsLow(name) ? (
              <span className="danger">Ton nom est trop court</span>
            ) : null}
            <KimonoInput
              type={"text"}
              className={
                loading ? "" : usernameTaken ? "danger-bg" : getClass(username)
              }
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (isLow(username)) return;
                setLoading(true);
              }}
              onFinishTyping={() => {
                if (isLow(username)) return;
                AuthService.available(username).then((res) => {
                  setUsernameTaken(!res.available);
                  setLoading(false);
                });
              }}
              placeholder={"Ton nom d'utilisateur"}
            />
            {usernameTaken != null && (
              <span
                className={
                  loading
                    ? ""
                    : usernameTaken || isLow(username)
                    ? "danger"
                    : "success"
                }
              >
                {isLow(username)
                  ? "Ton nom d'utilisateur est trop court"
                  : loading
                  ? "Vérification..."
                  : usernameTaken
                  ? "Ce nom d'utilisateur est déjà pris"
                  : "Ce nom d'utilisateur est disponible"}
              </span>
            )}
            <KimonoInput
              type={"password"}
              className={getClass(password)}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"Ton mot de passe secret"}
            />
            {viewIsLow(password) ? (
              <span className="danger">Ton mot de passe est trop court</span>
            ) : null}
            {!(usernameTaken || loading || isLow(name) || isLow(password)) && (
              <KimonoButton
                onClick={(e) => {
                  e.preventDefault();
                  setRegistering(true);
                  AuthService.register(name, username, password).then((res) => {
                    if (!res.success) {
                      dispatch({
                        type: ADD_NOTIFICATION,
                        payload: createMessage(
                          "Impossible de créer votre compte 🤔",
                          "Une erreur est survenue",
                          { type: "danger", duration: 15 }
                        ),
                      });
                      return;
                    }
                    setOpen(false);
                    dispatch({
                        type: ADD_NOTIFICATION,
                        payload: createMessage(
                            "Ton compte a été créé 🤗",
                            "Bienvenue dans l'équipe des Kimonodvie 🥷",
                            { type: "success", duration: 15 }
                        ),
                    })
                  });
                }}
                className={"success-bg"}
              >
                Créer mon compte
              </KimonoButton>
            )}
          </form>
        ) : (
          <KimonoLoading />
        )}
      </div>
    </BottomSheet>
  );
}
