import {
  KimonoButtons,
  KimonoButton,
  KimonoLink,
  KimonoNavBox,
  KimonoCenter,
} from "../Components/Kimono";
import { Random } from "react-animated-text";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <KimonoCenter style={{textAlign: "center"}} width="80%">
        <h1 style={{ fontSize: '2.25rem' }} className="primary">
          <Random
            text={"Kimonodvie"}
            iterations={1}
            effect="verticalFadeIn"
            effectChange={2}
            effectDirection="up"
          />
        </h1>
        <h2 className="success">
          Une liste prête à tout pour vous ✨
        </h2>
        <KimonoButton className="danger-bg" onClick={() => {
          window.location.href = "https://instagram.com/kimonodvie2023";
        }}>
          Suivez-nous sur Instagram 💖
        </KimonoButton>
        <KimonoLink className="primary-bg" to={"/vendredj"}>
          S'inscrire au VendreDj 💿
        </KimonoLink>
      </KimonoCenter>
      <KimonoNavBox className={"success-bg"} title="Allos 📳" to={"/allos"}>
        <p>Découvrir les allos que vous propose notre liste 📲</p>
      </KimonoNavBox>
      <KimonoNavBox
        className={"danger-bg"}
        title="La liste 📒"
        to={"/bde"}
        buttons={
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
