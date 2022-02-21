import Moment from "react-moment";
import "moment/locale/fr";
import { useSelector } from "react-redux";
import {
  KimonoBox,
  KimonoButton,
  KimonoButtons,
  KimonoCenter,
  KimonoLoading,
} from "../Kimono";

export default function RunningSlots() {
  const loading = useSelector((state) => state.allos.loading);
  const runningSlots = useSelector((state) => state.allos.runningSlots);

  if (loading) return <KimonoLoading />;

  return (
    <>
      <KimonoCenter width="80%">
        <h1>Créneaux à venir et créneaux en cours</h1>
      </KimonoCenter>
      {runningSlots
        .sort((a, b) => {
          return new Date(a.start) - new Date(b.start);
        })
        .map((slot, index) => {
          return (
            <KimonoBox
              className="success-bg"
              title={`${slot.parentName} réservé par ${slot.reservedBy}`}
              key={index}
              buttons={
                <KimonoButtons>
                  <KimonoButton
                    className="success-bg"
                    onClick={() => {
                      window.location.href = `tel:${slot.phone}`;
                    }}
                  >
                    Appeller {slot.reservedBy}
                  </KimonoButton>
                </KimonoButtons>
              }
              footer={
                <h3>
                  <Moment format="HH:mm">{slot.start}</Moment>
                  {" - "}
                  <Moment format="HH:mm">{slot.end}</Moment>
                </h3>
              }
            >
              {new Date(slot.start) < new Date() ? (
                <p>
                  Débutait{" "}
                  <Moment locale="fr" fromNow>
                    {slot.start}
                  </Moment>
                </p>
              ) : (
                <p>
                  Commence{" "}
                  <Moment locale="fr" fromNow>
                    {slot.start}
                  </Moment>
                </p>
              )}
            </KimonoBox>
          );
        })}
      {runningSlots.length === 0 && (
        <KimonoCenter width="80%">
          <h3 className="danger">Aucun créneau en cours</h3>
        </KimonoCenter>
      )}
    </>
  );
}
