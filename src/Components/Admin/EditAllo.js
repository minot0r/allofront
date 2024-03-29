import { useState } from "react";
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import {
  KimonoBox,
  KimonoButton,
  KimonoButtons,
  KimonoCenter,
  KimonoImage,
  KimonoInput,
  KimonoLoading,
  KimonoSelect,
  KimonoSwitch,
} from "../Kimono";
import Moment from "react-moment";
import "moment/locale/fr";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllo, editAllo, getAllos } from "../../Redux/reducers/allos";
import Tenor from "react-tenor";
import "./react-tenor.css";
import AllosService from "../../Redux/services/allos";

export default function EditAllo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [free, setFree] = useState(true);
  const [price, setPrice] = useState("");
  const [withSlots, setWithSlots] = useState(false);
  const [slots, setSlots] = useState([]);
  const [selectedTenor, setSelectedTenor] = useState("");
  const [alloId, setAlloId] = useState("");

  const dispatch = useDispatch();

  const loading =  useSelector((state) => state.allos.loading);
  const allos = useSelector((state) => state.allos.allos);
  const token = useSelector((state) => state.auth.token);

  const setAllo = async (id) => {
    const allo = allos.find((allo) => allo.id === id);
    setAlloId(id);
    const { slots } = await AllosService.getSlots(allo.id, token);
    setTitle(allo.name);
    setDescription(allo.description);
    setPhone(allo.phone);
    setFree(allo.free);
    setPrice(allo.price);
    setWithSlots(!allo.free || slots.length > 0);
    setSlots(
      slots.length > 0 ? slots : [
        {
          start: new Date(),
          end: new Date(+new Date() + 1000 * 60 * 60),
        },
      ]
    );
    setSelectedTenor(allo.gif);
  };

  if (loading) return <KimonoLoading />;

  return (
    <>
      <KimonoCenter width="80%">
        <h1>Modifier un allo</h1>
        <KimonoSelect
          options={allos.map((allo) => ({
            value: allo.id,
            label: allo.name,
          }))}
          onChange={(e) => setAllo(e.target.value)}
          placeholder="Choisissez un allo"
        />
        <KimonoInput
          value={title}
          className={title ? "success-bg" : ""}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre"
        />
        <KimonoInput
          value={description}
          className={description ? "success-bg" : ""}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        {selectedTenor !== "" ? (
          <KimonoImage
            onClick={() => setSelectedTenor("")}
            img={selectedTenor}
          />
        ) : (
          <Tenor
            searchPlaceholder="Rechercher un GIF"
            token="EHDK85HQJ0W8"
            locale="fr_FR"
            onSelect={(tenor) => setSelectedTenor(tenor.media[0].gif.url)}
          />
        )}
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

        <KimonoSwitch
          onChange={(e) => {
            setFree(e);
            if (!e) setWithSlots(true);
          }}
          val={free}
          title="Allo gratuit ?"
        />
        {!free && (
          <KimonoInput
            placeholder="Prix minimum de participation"
            value={price}
            onChange={(e) => {
              let price = e.target.value;
              price = price.replace(/[^0-9]/g, "");
              setPrice(price);
            }}
          ></KimonoInput>
        )}
        <KimonoSwitch
          onChange={(e) => {
            if (free) setWithSlots(e);
          }}
          val={withSlots}
          title={"Cet allo doit il avoir des créneaux ?"}
        />
      </KimonoCenter>
      {withSlots && (
        <>
          {slots.map((slot, index) => (
            <KimonoBox
              title={`Créneau n°${index + 1}`}
              footer={
                <h3>
                  Temps :{" "}
                  <Moment
                    local
                    locale="fr"
                    duration={slot.start}
                    date={slot.end}
                  />
                </h3>
              }
              buttons={
                <KimonoButtons>
                  <KimonoButton
                    className="danger-bg"
                    onClick={() => {
                      let newSlots = [...slots];
                      newSlots.splice(index, 1);
                      setSlots(newSlots);
                    }}
                  >
                    Supprimer
                  </KimonoButton>
                </KimonoButtons>
              }
              className={index % 2 === 0 ? "primary-bg" : "warning-bg"}
              key={index}
            >
              <p>Début</p>
              <DateTimePicker
                value={slot.start}
                minDate={new Date("1er avril 2022")}
                maxDate={new Date("30 avril 2022")}
                locale="fr-FR"
                onChange={(date) => {
                  let newSlots = [...slots];
                  newSlots[index].start = date;
                  newSlots[index].end = new Date(+date + 1000 * 60 * 60);
                  setSlots(newSlots);
                }}
              />
              <hr />
              <p>Fin</p>
              <div style={{ marginBottom: "1rem" }}>
                <DateTimePicker
                  value={slot.end}
                  minDate={new Date("1er avril 2022")}
                  maxDate={new Date("30 avril 2022")}
                  locale="fr-FR"
                  onChange={(date) => {
                    let newSlots = [...slots];
                    newSlots[index].end = date;
                    setSlots(newSlots);
                  }}
                />
              </div>
            </KimonoBox>
          ))}
          <KimonoCenter width="80%">
            <KimonoButton
              onClick={(e) => {
                setSlots([
                  ...slots,
                  {
                    start: new Date(),
                    end: new Date(+new Date() + 1000 * 60 * 60),
                  },
                ]);
              }}
              className={"success-bg"}
            >
              +
            </KimonoButton>
          </KimonoCenter>
        </>
      )}
      <KimonoCenter width="80%">
        <KimonoButton
          className="success-bg"
          onClick={() => {
            dispatch(
              editAllo({
                name: title,
                description: description,
                phone: phone,
                free: free,
                price: price,
                slots: withSlots ? slots : [],
                gif: selectedTenor,
                id: alloId,
              })
            );
            dispatch(getAllos(true));
          }}
        >
          Modifier ce allo
        </KimonoButton>
        <KimonoButton
          className="danger-bg"
          onClick={() => {
            dispatch(deleteAllo(alloId));
            dispatch(getAllos(true));
          }}
        >
          Supprimer ce allo
        </KimonoButton>
      </KimonoCenter>
    </>
  );
}
