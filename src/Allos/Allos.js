import { useSelector, shallowEqual } from "react-redux";
import {
  KimonoButton,
  KimonoButtons,
  KimonoCenter,
  KimonoLoading,
  KimonoNavBox,
  KimonoAuthLink,
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
          Kimonodvie te propose ses services les "allos", alors{" "}
          <span className="success-bg kimono-bounce">APPELLE</span> nous dès
          maintenant ou{" "}
          <span className="danger-bg kimono-bounce two">RESERVE</span> ton
          créneau pour un service à venir!
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
                  <KimonoAuthLink
                    onClick={(e) => {
                      if (allo.price === 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = `tel:0695450345`;
                      }
                    }}
                    to={`/allos/${allo.id}/slots`}
                    className={allo.price > 0 ? "success-bg" : "danger-bg"}
                  >
                    {allo.price > 0 ? "🍽️ Réserver" : "Voir le numéro"}
                  </KimonoAuthLink>
                  <KimonoButton>📖 + d'informations</KimonoButton>
                </KimonoButtons>
              }
              footer={allo.price > 0 && <h3>💰 {allo.price} €</h3>}
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
