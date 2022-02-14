import { useDispatch, useSelector } from "react-redux";
import { GET_ALLO } from "../Redux/reducers/allos";
import { useParams } from "react-router-dom";
import { KimonoButton, KimonoCenter } from "../Components/Kimono";

export default function Allo() {
  const params = useParams();
  const dispatch = useDispatch();
  dispatch({
    type: GET_ALLO,
    payload: {
      id: params.alloId,
    },
  });
  const allo = useSelector((state) => state.allos.allo);
  const color = allo?.price > 0 ? "success" : "danger";
  return (
    <KimonoCenter width={"80%"}>
      {allo ? (
        <>
          <h1 className={color}>{allo.name}</h1>
          <h3>{allo.description}</h3>
          {allo.price > 0 ? (
              <div>
            <p className={color}>
              Cet allo est payant, cela signifie qu'il faut réserver un créneau
              pour pouvoir y participer. Réserve un créneau dès maintenant !
            </p>
            <p>Il reste {allo.slotsLeft} créneaux libres</p>
            <KimonoButton className={color}>Réserver un créneau</KimonoButton>
            </div>
          ) : (
            <p className={color}>
              Cet allo est gratuit. YOUHOU ! Appelle le numéro dès maintenant
              pour accèder à l'allo.
            </p>
          )}
          <KimonoButton onClick={() => {
              window.location.href = `tel:0695450345`;
          }}>Appeler le numéro { allo.price > 0 && "pour plus d'inforations" }</KimonoButton>
        </>
      ) : (
        <>
          <h1>Oups 🥿</h1>
          <p>
            Cet allo n'existe pas, ou plus. Enfin bref, retourne en lieu sûr.
          </p>
          <KimonoButton to="/allos">Retour</KimonoButton>
        </>
      )}
    </KimonoCenter>
  );
}
