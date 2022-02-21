import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllo,
  getSlot,
  reserveSlot,
  validateSlot,
} from "../../Redux/reducers/allos";
import {
  KimonoBox,
  KimonoButton,
  KimonoCenter,
  KimonoInput,
  KimonoLoading,
  KimonoSubmit,
} from "../Kimono";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Moment from "react-moment";
import PaymentService from "../../Redux/services/payment";
import { ADD_NOTIFICATION } from "../../Redux/reducers/notification";
import { createMessage } from "../../Redux/services/message";

export default function Reserve() {
  const params = useParams();
  const { alloId, slotId } = params;
  const dispatch = useDispatch();

  const [reservedByOther, setReservedByOther] = useState(false);
  const [phone, setPhone] = useState("");
  const [paying, setPaying] = useState(false);

  const allo = useSelector((state) => state.allos.allo);
  const slot = useSelector((state) => state.allos.slot);
  const username = useSelector((state) => state.auth.user?.username);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (allo == null) {
      dispatch(getAllo(alloId, true));
      return;
    }
    if (slot == null) {
      dispatch(getSlot(alloId, slotId));
      return;
    }
    if (slot.reserved) {
      setReservedByOther(slot.reservedBy !== username);
      return;
    }
    if (!reservedByOther && !slot.reserved) {
      dispatch(reserveSlot(alloId, slotId));
    }
  }, [
    slot,
    username,
    dispatch,
    alloId,
    slotId,
    reservedByOther,
    setReservedByOther,
    allo,
  ]);

  const loading = useSelector((state) => state.allos.loading);

  const stripe = useStripe();
  const elements = useElements();

  if (loading) return <KimonoLoading />;

  return slot !== null && allo !== null ? (
    !reservedByOther ? (
      <>
        <KimonoCenter tiny width={"80%"}>
          <h1>Valider votre créneau</h1>
        </KimonoCenter>
        {allo.free ? (
          !slot.validated ? (
            <KimonoBox width={"80%"}>
              <p>
                Une fois votre créneau validé notre équipe vous appellera
                pendant ou un peu avant le créneau pour préparer/effectuer le
                service
              </p>
              <p>
                Laisse nous un{" "}
                <span className="success-bg kimono-bounce">
                  numéro de téléphone
                </span>{" "}
                pour te contacter (Ce numéro est privé et ne sera pas visible
                par n'importe quel utilisateur, et ne sera pas sauvegardé en
                base de données)
              </p>
              <KimonoInput
                className={phone.length === 9 ? "success-bg" : ""}
                value={`+33${phone}`}
                onChange={(e) => {
                  let value = e.target.value.substring(3);
                  if (value.length > 9) return;
                  value = value.replace(/[^0-9]+/g, "");
                  setPhone(value);
                }}
                placeholder="Téléphone"
              />
              {phone.length === 9 && (
                <KimonoButton
                  className={"success-bg"}
                  onClick={() => {
                    dispatch(validateSlot(alloId, slotId, phone));
                  }}
                >
                  Valider
                </KimonoButton>
              )}
            </KimonoBox>
          ) : new Date(slot.start) < new Date() ? (
            <KimonoCenter width={"80%"}>
              <h3>Vous avez validé ce créneau!!</h3>
              <p>Votre créneau à commencé et vous n'avez pas de nouvelles ?</p>
              <KimonoButton
                className={"success-bg"}
                onClick={() => {
                  window.location.href = `tel:${allo.phone}`;
                }}
              >
                Appelez le numéro associé au service
              </KimonoButton>
            </KimonoCenter>
          ) : (
            <KimonoBox width={"80%"}>
              <p>Bravo! votre créneau est validé 😄</p>
            </KimonoBox>
          )
        ) : !slot.validated ? (
          <>
            <KimonoBox className={"primary-bg"} title={"Récap'"}>
              <ul>
                <li>
                  <h4>{allo.name}</h4>
                  <p>
                    Créneau de <Moment format="HH:mm">{slot.start}</Moment>
                    {" - "}
                    <Moment format="HH:mm">{slot.end}</Moment>
                  </p>
                  <h5>Cotisation pour la liste de {allo.price}€</h5>
                </li>
              </ul>
            </KimonoBox>
            <KimonoBox
              tiny
              footer={<h3>{allo.price} €</h3>}
              className={"success-bg"}
              title="Paiement par carte"
            >
              <KimonoCenter tiny>
                <br />
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!stripe || !elements) return;
                    setPaying(true);
                    const { clientSecret } = await PaymentService.createIntent(
                      alloId,
                      slotId,
                      token
                    );
                    const { error: stripeError } =
                      await stripe.confirmCardPayment(clientSecret, {
                        payment_method: {
                          card: elements.getElement(CardElement),
                          billing_details: {
                            name: username,
                          },
                        },
                      });
                    setPaying(false);
                    if (stripeError) {
                      dispatch({
                        type: ADD_NOTIFICATION,
                        payload: createMessage(
                          "Erreur lors du paiement...",
                          stripeError.message,
                          {
                            type: "danger",
                            duration: 20,
                          }
                        ),
                      });
                      return;
                    }

                    dispatch(validateSlot(alloId, slotId, phone));
                  }}
                >
                  <KimonoBox tiny noMargin>
                    <CardElement />
                  </KimonoBox>
                  <br />
                  <p>
                    Laisse nous un{" "}
                    <span className="success-bg kimono-bounce">
                      numéro de téléphone
                    </span>{" "}
                    pour te contacter (Ce numéro est privé et ne sera pas
                    visible par n'importe quel utilisateur, et ne sera pas
                    sauvegardé en base de données)
                  </p>
                  <KimonoInput
                    className={phone.length === 9 ? "success-bg" : ""}
                    value={`+33${phone}`}
                    onChange={(e) => {
                      let value = e.target.value.substring(3);
                      if (value.length > 9) return;
                      value = value.replace(/[^0-9]+/g, "");
                      setPhone(value);
                    }}
                    placeholder="Téléphone"
                  />
                  {phone.length === 9 && !paying && (
                    <KimonoSubmit
                      className={"success-bg"}
                      value={`Payer et valider`}
                    />
                  )}
                  {paying && (
                    <KimonoLoading />
                  )}
                </form>
              </KimonoCenter>
            </KimonoBox>
          </>
        ) : new Date(slot.start) < new Date() ? (
          <KimonoCenter width={"80%"}>
            <h3>Vous avez validé ce créneau!!</h3>
            <p>Votre créneau à commencé et vous n'avez pas de nouvelles ?</p>
            <KimonoButton
              className={"success-bg"}
              onClick={() => {
                window.location.href = `tel:${allo.phone}`;
              }}
            >
              Appelez le numéro associé au service
            </KimonoButton>
          </KimonoCenter>
        ) : (
          <KimonoBox width={"80%"}>
            <p>Bravo! Votre créneau est validé 😄</p>
          </KimonoBox>
        )}
      </>
    ) : (
      <KimonoCenter width={"80%"}>
        <h1>Ce créneau est déjà réservé par {slot.reservedBy}</h1>
        <KimonoButton
          onClick={() => {
            window.history.back();
          }}
        >
          Retour
        </KimonoButton>
      </KimonoCenter>
    )
  ) : (
    <KimonoCenter width={"80%"}>
      <h1>Créneau non trouvé</h1>
      <KimonoButton
        onClick={() => {
          window.history.back();
        }}
      >
        Retour
      </KimonoButton>
    </KimonoCenter>
  );
}
