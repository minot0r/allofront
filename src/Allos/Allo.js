import { useDispatch, useSelector } from "react-redux";
import { getAllo } from "../Redux/reducers/allos";
import { useParams } from "react-router-dom";
import {
  KimonoAuthButton,
  KimonoAuthLink,
  KimonoButton,
  KimonoCenter,
  KimonoLoading,
} from "../Components/Kimono";
import { useEffect } from "react";

export default function Allo() {
  const params = useParams();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  useEffect(() => {
    dispatch(getAllo(params.alloId, loggedIn));
  }, [dispatch, loggedIn, params.alloId]);
  const allo = useSelector((state) => state.allos.allo);
  const loading = useSelector((state) => state.allos.loading);
  const color = allo?.price > 0 ? "success" : "danger";
  if(loading) return <KimonoLoading />
  return (
    <KimonoCenter width={"80%"}>
      {allo ? (
        <>
          <h1 className={color}>{allo.name}</h1>
          <h3>{allo.description}</h3>
          {allo.price > 0 ? (
            <div>
              <p className={color}>
                Cet allo est payant, cela signifie qu'il faut réserver un
                créneau pour pouvoir y participer. Réserve un créneau dès
                maintenant !
              </p>
              <p>Il reste {allo.slotsLeft} créneaux libres</p>
              <KimonoAuthLink
                to={`/allos/${allo.id}/reserve`}
                className={color}
              >
                Réserver un créneau ({allo.price}€)
              </KimonoAuthLink>
            </div>
          ) : (
            <p className={color}>
              Cet allo est gratuit. YOUHOU ! Appelle le numéro dès maintenant
              pour accèder à l'allo.
            </p>
          )}
          <KimonoAuthButton
            className={"primary-bg"}
            onClick={() => {
              window.location.href = `tel:0695450345`;
            }}
          >
            Appeler le numéro {allo.price > 0 && "pour plus d'inforations"}
          </KimonoAuthButton>
        </>
      ) : (
        <>
          <h1>Oups 🥿</h1>
          <p>
            Cet allo n'existe pas, ou plus. Enfin bref, retourne en lieu sûr.
          </p>
          <KimonoButton
            onClick={() => {
              window.history.back();
            }}
          >
            Retour
          </KimonoButton>
        </>
      )}
    </KimonoCenter>
  );
}
