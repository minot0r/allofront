import {
  KimonoButtons,
  KimonoLink,
  KimonoNavBox,
  KimonoHello,
  KimonoImage,
  KimonoJoke,
} from "../Components/Kimono";
import logo from "../logo.png";
import { useSelector } from "react-redux";
import "./Home.css";

export default function Home() {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const name = useSelector((state) => state.auth.user?.name);
  return (
    <div className="home-container">
      {loggedIn ? (
        <>
          <KimonoHello name={name} />
          <KimonoImage img={logo} />
        </>
      ) : (
        <KimonoJoke />
      )}

      <KimonoNavBox className={"success-bg"} title="Allos 📳" to={"/allos"}>
        <p>Découvrir les allos que vous propose notre liste 📲</p>
      </KimonoNavBox>
      <KimonoNavBox
        className={"warning-bg"}
        title="La liste 📒"
        to={"/bde"}
        footer={
          <KimonoButtons>
            <KimonoLink className={"warning-bg"} to={"/bde#members"}>
              Voir les membres 📝
            </KimonoLink>
            <KimonoLink className={"success-bg"} to={"/bde#program"}>
              Voir le programme 📅
            </KimonoLink>
          </KimonoButtons>
        }
      >
        <p>Découvrir la liste du BDE 🤠</p>
      </KimonoNavBox>
    </div>
  );
}
