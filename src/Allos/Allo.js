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
  const color = !allo?.hasSlots ? "success" : "danger";
  if (loading) return <KimonoLoading />;
  return (
    <KimonoCenter width={"80%"}>
      {allo ? (
        <>
          <h1 className={color}>{allo.name}</h1>
          <h3>{allo.description}</h3>
          {!allo.free ? (
            <p className={color}>
              Cet allo demande une cotisation, cela signifie qu'il faut réserver
              pour pouvoir participer et verser une petite aide financière pour
              alléger les dépenses de la liste 💖
            </p>
          ) : (
            <p className={color}>
              Cet allo est gratuit. YOUHOU ! Appelle le numéro dès maintenant
              pour accèder à l'allo.
            </p>
          )}
          {allo.hasSlots && (
            <>
              <p>Il reste {allo.slotsLeft} créneaux libres</p>
              <KimonoAuthLink
                to={`/allos/${params.alloId}/slots`}
                className={color}
              >
                Réserver un créneau {!allo.free && `(cotisation demandée de ${allo.price}€)`}
              </KimonoAuthLink>
            </>
          )}
          <KimonoAuthButton
            className={"primary-bg"}
            onClick={() => {
              if(new Date() < new Date("2022-03-05")) {
                alert("Cet allo n'est pas encore disponible, il sera disponible le 5 mars 2022");
                return;
              }
              window.location.href = `tel:+33${allo.phone}`;
            }}
          >
            Appeler le numéro {allo.hasSlots && "pour plus d'informations"}
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
