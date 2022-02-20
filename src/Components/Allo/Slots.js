import { Fragment, useEffect, useState } from "react";
import Moment from "react-moment";
import "moment/locale/fr";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSlots, unreserveSlot } from "../../Redux/reducers/allos";
import {
  KimonoBox,
  KimonoButton,
  KimonoButtons,
  KimonoCenter,
  KimonoLink,
  KimonoLoading,
  KimonoModal,
} from "../Kimono";

export default function Slots() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlots(params.alloId));
  }, [dispatch, params.alloId]);

  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = useSelector((state) => state.allos.slots);
  const loading = useSelector((state) => state.allos.loading);
  const username = useSelector((state) => state.auth.user?.username);

  const dayLocale = (day) => {
    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    return days[day];
  };

  const hasSlot = () => {
    if (!slots || !username) return false;
    return slots.find((slot) => slot.reservedBy === username);
  };

  if (loading) return <KimonoLoading />;
  return (
    <>
      {slots.filter((slot) => new Date(slot.start) > new Date()).length > 0 ? (
        <>
          {selectedSlot !== null && (
            <KimonoModal
              onClick={() => {
                setTimeout(() => {
                  setSelectedSlot(null);
                }, 500);
              }}
            >
              <h3>Êtes vous sûr de vouloir réserver ce créneau ?</h3>
              <h4>Vous ne pouvez en réserver qu'un seul!</h4>
              <KimonoButtons>
                <KimonoButton
                  className={"danger-bg"}
                  onClick={() => {
                    setTimeout(() => {
                      setSelectedSlot(null);
                    }, 500);
                  }}
                >
                  Annuler
                </KimonoButton>
                <KimonoLink
                  className="success-bg"
                  to={`/allos/${params.alloId}/reserve/${selectedSlot.id}`}
                >
                  Reserver
                </KimonoLink>
              </KimonoButtons>
            </KimonoModal>
          )}
          <KimonoCenter width={"80%"}>
            <h1>Créneaux disponibles</h1>
          </KimonoCenter>
          {slots
            .reduce((acc, slot) => {
              const day = new Date(slot.start).getDay();
              if (acc.indexOf(day) === -1) {
                acc.push(day);
                return acc;
              }
              return acc;
            }, [])
            .map((day) => {
              return (
                <Fragment key={day}>
                  <KimonoCenter tiny width={"80%"}>
                    <h3>{dayLocale(day)} :</h3>
                  </KimonoCenter>
                  {slots
                    .filter((slot) => new Date(slot.start).getDay() === day)
                    .filter((slot) => new Date(slot.start) > new Date())
                    .sort((a, b) => new Date(a.start) - new Date(b.start))
                    .map((slot, index) => {
                      return (
                        <KimonoBox
                          key={index}
                          className={
                            slot.validated
                              ? "danger-bg"
                              : slot.reservedBy !== null
                              ? "warning-bg"
                              : "success-bg"
                          }
                          title={`Créneau n°${index + 1}`}
                          footer={
                            <h3>
                              <Moment format="HH:mm">{slot.start}</Moment>
                              {" - "}
                              <Moment format="HH:mm">{slot.end}</Moment>
                            </h3>
                          }
                          buttons={
                            <KimonoButtons>
                              {slot.reservedBy === username &&
                              !slot.validated ? (
                                <>
                                  <KimonoLink
                                    className="success-bg"
                                    to={`/allos/${params.alloId}/reserve/${slot.id}`}
                                  >
                                    Continuer la réservation de ce créneau
                                  </KimonoLink>
                                  <KimonoButton
                                    onClick={() => {
                                      dispatch(
                                        unreserveSlot(params.alloId, slot.id)
                                      );
                                    }}
                                  >
                                    Annuler la réservation
                                  </KimonoButton>
                                </>
                              ) : slot.reservedBy === username ? (
                                <KimonoButton className="success-bg">
                                  Vous avez validé ce créneau
                                </KimonoButton>
                              ) : hasSlot() ? (
                                <KimonoButton className="danger-bg">
                                  🔒 Vous avez déjà réservé un créneau
                                </KimonoButton>
                              ) : slot.validated ? (
                                <KimonoButton className="danger-bg">
                                  🔒 Réservé par {slot.reservedBy}
                                </KimonoButton>
                              ) : slot.reservedBy !== null ? (
                                <KimonoButton className="warning-bg">
                                  🔒 Demandé par {slot.reservedBy}
                                </KimonoButton>
                              ) : (
                                <KimonoButton
                                  className="success-bg"
                                  onClick={() => {
                                    setSelectedSlot(slot);
                                  }}
                                >
                                  Réserver ce créneau
                                </KimonoButton>
                              )}
                            </KimonoButtons>
                          }
                        >
                          <h3>
                            Ce créneau commence{" "}
                            <Moment locale="fr" fromNow>
                              {slot.start}
                            </Moment>
                          </h3>
                        </KimonoBox>
                      );
                    })}
                </Fragment>
              );
            })}
        </>
      ) : (
        <KimonoCenter width="80%">
          <h1>Oups 🥿</h1>
          <p>Cet allo n'a pas/plus de créneaux. Retourne en lieu sûr.</p>
          <KimonoButton
            onClick={() => {
              window.history.back();
            }}
          >
            Retour
          </KimonoButton>
        </KimonoCenter>
      )}
    </>
  );
}
