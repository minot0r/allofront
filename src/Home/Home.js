import {
  KimonoButtons,
  KimonoLink,
  KimonoNavBox,
  KimonoJoke,
} from "../Components/Kimono";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <KimonoJoke />
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
