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
          <KimonoImage img={logo} />
          <KimonoHello name={name} />
        </>
      ) : (
        <KimonoJoke />
      )}

      <KimonoNavBox className={"success-bg"} title="Allos 📳" to={"/allos"}>
        <p>Découvrir les allos que vous propose notre liste 📲</p>
      </KimonoNavBox>
      <KimonoNavBox
        className={"danger-bg"}
        title="La liste 📒"
        to={"/bde"}
        footer={
          <KimonoButtons>
            <KimonoLink className={"danger-bg"} to={"/bde#members"}>
              Voir les membres 📝
            </KimonoLink>
            <KimonoLink className={"danger-bg"} to={"/bde#program"}>
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
