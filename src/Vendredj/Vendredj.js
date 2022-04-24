import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  KimonoButton,
  KimonoCenter,
  KimonoCollapsible,
  KimonoImage,
  KimonoInput,
  KimonoLoading,
  KimonoSubmit,
} from "../Components/Kimono";
import { registerForm } from "../Redux/reducers/vendredj";

export default function VendreDJ() {
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [music, setMusic] = useState("");

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.vendredj.loading);

  return (
    <>
      <KimonoCenter width="80%">
        <h1 className="success">Formulaire d'inscription au VendreDj</h1>
        <KimonoCollapsible title="VendreDj c'est quoi ?">
          <p>
            VendreDj c'est un évènement qu'on mets en place jusqu'à la fin de
            l'année scolaire, cet évènement permets aux personnes qui le
            souhaitent de pouvoir mixer à l'école.{" "}
          </p>
          <br />
          <p>
            Cet évènement prends lieu le vendedi midi à l'école dans la salle de
            la KFET.
          </p>
          <br />
          <p> Une scène est montée au préalable par les Kimonos.</p>
          <br />
          <p>
            On souhaite proposer 2 sets de 45 minutes : 12h15 - 13h00 et 13h00 -
            13h45.
          </p>
        </KimonoCollapsible>
        <KimonoCollapsible title="Je peux participer ?">
          <p>Bien sûr!</p>
          <br />
          <p>
            Tout le monde est invité à mixer, novice ou pas, et peu importe le
            style de musique que vous souhaitez mixer.
          </p>
          <br />
          <p>
            Le but est de faire connaître vos goûts musicaux, et les partager
            avec un public qui l'aime.
          </p>
        </KimonoCollapsible>
        <KimonoCollapsible title="Plus de questions ?">
          <KimonoButton
            className="danger-bg"
            onClick={() => {
              window.location.href = "https://instagram.com/kimonodvie2023";
            }}
          >
            Envoie nous un message sur Insta 💖
          </KimonoButton>
        </KimonoCollapsible>
        <KimonoImage
          img={
            "https://c.tenor.com/gQ49THiMkvsAAAAd/chromacat-chromacatlive.gif"
          }
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(registerForm(name, instagram, music));
          }}
        >
          <KimonoInput
            className={name.length > 0 ? "success-bg" : ""}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Ton petit nom"
          />
          <KimonoInput
            className={instagram.length > 0 ? "success-bg" : ""}
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
            placeholder="Ton @ sur insta"
          />
          <KimonoInput
            className={music.length > 0 ? "success-bg" : ""}
            value={music}
            onChange={(e) => {
              setMusic(e.target.value);
            }}
            placeholder="Ton style de musique"
          />
          {name.length > 0 &&
            instagram.length > 0 &&
            music.length > 0 &&
            !loading && (
              <KimonoSubmit className={"success-bg"} value={"Envoyer le formulaire 🤓"} />
            )}
          {loading && <KimonoLoading />}
        </form>
      </KimonoCenter>
    </>
  );
}
