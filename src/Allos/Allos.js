import { useSelector, shallowEqual } from "react-redux";
import {
  KimonoButton,
  KimonoLink,
  KimonoButtons,
  KimonoCenter,
  KimonoLoading,
  KimonoNavBox,
} from "../Components/Kimono";
import "./Allos.css";

export default function Allos() {
  let loading = useSelector((state) => state.allos.loading, shallowEqual);
  let allos = useSelector((state) => state.allos.allos);

  return (
    <div className="allos-container">
      <KimonoCenter width={"80%"}>
        <h1>AlLlllLOooO??? 🤙🤙🤙</h1>
        <h3>
          Les allos payants sont marqués en{" "}
          <span className="success-bg kimono-bounce">VERT</span> et allos gratuits sont
          marqués en <span className="danger-bg kimono-bounce two">ROUGE</span>
        </h3>
      </KimonoCenter>
      {!loading ? (
        <>
          {allos.map((allo, index) => (
            <KimonoNavBox
              className={allo.price > 0 ? "success-bg" : "danger-bg"}
              icon={"📱"}
              key={index}
              to={`/allos/${allo.id}`}
              title={`${allo.name}`}
              buttons={
                <KimonoButtons>
                  <KimonoLink to={`/allos/${allo.id}/reserve`}
                    className={allo.price > 0 ? "success-bg" : "danger-bg"}
                  >
                    {allo.price > 0 ? "🍽️ Réserver" : "Voir le numéro"}
                  </KimonoLink>
                  <KimonoButton>📖 + d'informations</KimonoButton>
                </KimonoButtons>
              }
              footer={
                <h3>
                  💰 {allo.price} €
                </h3>
              }
            >
              <p>{allo.description}</p>
            </KimonoNavBox>
          ))}
        </>
      ) : (
        <KimonoLoading />
      )}
    </div>
  );
}
