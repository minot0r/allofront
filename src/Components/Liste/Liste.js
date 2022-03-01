import { useState } from "react";
import { KimonoBox, KimonoCenter, KimonoImage, KimonoJoke } from "../Kimono";
import "./Liste.css";
import valentin from  '../../photos/valentin profil.png';
import alban from  '../../photos/alban profil.png';
import alexandre from  '../../photos/alexandre profil.png';
import anouck from  '../../photos/anouck profil.png';
import baptiste from  '../../photos/baptiste profil.png';
import camille from  '../../photos/camille profil.png';
import guillaume from  '../../photos/guillaumeprofil.png';
import Julien from  '../../photos/julienprofil.png';
import lisa from  '../../photos/lisa profil.png';
import lori from  '../../photos/lori profil.png';
import nemo from  '../../photos/nemo profil.png';
import thomas from  '../../photos/thomasprofil.png';
import victor from  '../../photos/victor profil.png';
import younes from  '../../photos/youness profil.png';
import zakaria from  '../../photos/zakaria profil.png';


export default function Liste() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);
  const [clicked9, setClicked9] = useState(false);
  const [clicked10, setClicked10] = useState(false);
  const [clicked11, setClicked11] = useState(false);
  const [clicked12, setClicked12] = useState(false);
  const [clicked13, setClicked13] = useState(false);
  const [clicked14, setClicked14] = useState(false);
  const [clicked15, setClicked15] = useState(false);


  const getRandomColor = () => {
    const colors = ["success-bg", "warning-bg", "danger-bg", "primary-bg"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="liste-container">
      <KimonoJoke />
      <KimonoCenter width={"80%"}>
        <h1 className="primary-bg">Nos membres</h1>
        <h3 className="primary">
          Retrouve tes samuraï préférés et dédiés à toi 😏
        </h3>
      </KimonoCenter>
      <KimonoBox
        reverse={clicked1}
        onClick={() => setClicked1(!clicked1)}
        footer={<h4>Chargé de com' et développeur web</h4>}
        rchildren={
          <>
            <p>Le plus grand pirate de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Valentin Giorgetti</h3>
        <h5>AKA Mafiakuza</h5>
        <KimonoImage img={valentin} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked2}
        onClick={() => setClicked2(!clicked2)}
        footer={<h4>Responsable organisation</h4>}
        rchildren={
          <>
            <p>Le plus grand bg de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Younes Saadaoui</h3>
        <h5>AKA Itachibre</h5>
        <KimonoImage img={younes} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked3}
        onClick={() => setClicked3(!clicked3)}
        footer={<h4>Président</h4>}
        rchildren={
          <>
            <p>Le meilleur président de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Némo Demarquay</h3>
        <h5>AKA Tatamine</h5>
        <KimonoImage img={nemo} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked4}
        onClick={() => setClicked4(!clicked4)}
        footer={<h4>Vice-Président</h4>}
        rchildren={
          <>
            <p>Le meilleur vice-président de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Guillaume Gros</h3>
        <h5>Katanarcotique</h5>
        <KimonoImage img={guillaume} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked5}
        onClick={() => setClicked5(!clicked5)}
        footer={<h4>Trésorier</h4>}
        rchildren={
          <>
            <p>L'argent, c'est son élément</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Alban Godart</h3>
        <h5>AKA Chef Sushit</h5>
        <KimonoImage img={alban} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked6}
        onClick={() => setClicked6(!clicked6)}
        footer={<h4>Vice-Trésorier</h4>}
        rchildren={
          <>
            <p>Avec lui, on est jamais perdant</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Lori chahbazian</h3>
        <h5>AKA Ying Yäger Meister</h5>
        <KimonoImage img={lori} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked7}
        onClick={() => setClicked7(!clicked7)}
        footer={<h4>Responsable Danse</h4>}
        rchildren={
          <>
            <p>La meilleure danseuse de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Lisa Ginestet</h3>
        <h5>Princesse monocokée</h5>
        <KimonoImage img={lisa} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked8}
        onClick={() => setClicked8(!clicked8)}
        footer={<h4>Membre pôle danse</h4>}
        rchildren={
          <>
            <p>Champion de France de jeux d'alcool</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Julien Delahaye</h3>
        <h5>Chinois de la calle</h5>
        <KimonoImage img={Julien} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked9}
        onClick={() => setClicked9(!clicked9)}
        footer={<h4>Membre pôle son</h4>}
        rchildren={
          <>
            <p>Le meilleur des DJ</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Victor Leblanc</h3>
        <h5>Nausicaa de la vallée du vin</h5>
        <KimonoImage img={victor} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked10}
        onClick={() => setClicked10(!clicked10)}
        footer={<h4>(vraie)Responsable organisation</h4>}
        rchildren={
          <>
            <p>Elle fait les meilleurs CR de réunions</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Anouck Bruguière</h3>
        <h5>AKA Geisharlatan</h5>
        <KimonoImage img={anouck} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked11}
        onClick={() => setClicked11(!clicked11)}
        footer={<h4>Membre pôle communication</h4>}
        rchildren={
          <>
            <p>Le montage vidéo, c'est son élément</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Zakaria Belbali</h3>
        <h5>AKA Asumatrixé</h5>
        <KimonoImage img={zakaria} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked12}
        onClick={() => setClicked12(!clicked12)}
        footer={<h4>Responsable cuisine</h4>}
        rchildren={
          <>
            <p>On a jamais faim avec lui</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Alexandre Desbourdelles</h3>
        <h5>AKA Rhum-bô</h5>
        <KimonoImage img={alexandre} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked13}
        onClick={() => setClicked13(!clicked13)}
        footer={<h4>Membre pôle son</h4>}
        rchildren={
          <>
            <p>Le meilleur mixeur de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Baptiste Morée</h3>
        <h5>AKA Jacky Chanvre</h5>
        <KimonoImage img={baptiste} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked14}
        onClick={() => setClicked14(!clicked14)}
        footer={<h4>Membre pôle cuisine</h4>}
        rchildren={
          <>
            <p>Elle prépare les meilleirs gyozas</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Camille Urban</h3>
        <h5>AKA Sakurakaï</h5>
        <KimonoImage img={camille} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked15}
        onClick={() => setClicked15(!clicked15)}
        footer={<h4>Membre pôle son</h4>}
        rchildren={
          <>
            <p>Le plus grand pirate de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Thomas Veau</h3>
        <h5>AKA Sangokuite</h5>
        <KimonoImage img={thomas} />
      </KimonoBox>
    </div>
  );
}
