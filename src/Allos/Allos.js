import { useEffect } from "react";
import Moment from "react-moment";
import "moment/locale/fr";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  KimonoButton,
  KimonoButtons,
  KimonoCenter,
  KimonoLoading,
  KimonoNavBox,
  KimonoAuthLink,
} from "../Components/Kimono";
import { getReservedSlots } from "../Redux/reducers/allos";
import "./Allos.css";

export default function Allos() {
  let loading = useSelector((state) => state.allos.loading, shallowEqual);
  let allos = useSelector((state) => state.allos.allos);

  const dispatch = useDispatch();

  const reservedSlots = useSelector((state) => state.allos.reservedSlots);
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if(!loggedIn) return;
    dispatch(getReservedSlots());
  }, [dispatch, loggedIn]);

  return (
    <div className="allos-container">
      {reservedSlots.length > 0 &&
        reservedSlots
        .filter((slot) => new Date(slot.end) > new Date())
        .map((slot) => {
          return (
            <KimonoNavBox className={slot.reserved ? "success-bg" : "warning-bg"}
              title={`Créneau ${new Date(slot.start) < new Date() ? "en cours " :  " "}pour ${slot.parentName}`}
              key={slot.id}
              to={`/allos/${slot.parent}/reserve/${slot.id}`}
            >
              <h3>
                <Moment format="HH:mm">{slot.start}</Moment>
                {" - "}
                <Moment format="HH:mm">{slot.end}</Moment>
              </h3>
              { new Date(slot.start) < new Date() ?
              <p>
                Débutait{" "}
                <Moment locale="fr" fromNow>
                  {slot.start}
                </Moment>
              </p>
              :
              <p>
                Commence{" "}
                <Moment locale="fr" fromNow>
                  {slot.start}
                </Moment>
              </p>
              }
            </KimonoNavBox>
          );
        })}
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
              className={!allo.hasSlots ? "success-bg" : "danger-bg"}
              icon={"📱"}
              key={index}
              to={`/allos/${allo.id}`}
              title={`${allo.name}`}
              buttons={
                <KimonoButtons>
                  <KimonoAuthLink
                    onClick={(e) => {
                      if (!allo.hasSlots) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = `tel:+33${allo.phone}`;
                      }
                    }}
                    to={`/allos/${allo.id}/slots`}
                    className={!allo.hasSlots ? "success-bg" : "danger-bg"}
                  >
                    {allo.hasSlots ? "🍽️ Réserver" : "Voir le numéro"}
                  </KimonoAuthLink>
                  <KimonoButton>📖 + d'informations</KimonoButton>
                </KimonoButtons>
              }
              footer={!allo.free && <h3>Cotisation demandée</h3>}
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
