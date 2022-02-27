import { useState } from "react";
import { KimonoBox, KimonoCenter, KimonoImage, KimonoJoke } from "../Kimono";
import "./Liste.css";

export default function Liste() {
  const [clicked, setClicked] = useState(false);

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
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Président de réserve</h4>}
        rchildren={
          <>
            <p>Le plus grand pirate de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Valentin Giorgetti</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Responsable organisation</h4>}
        rchildren={
          <>
            <p>Le plus grand bg de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Younes Saadaoui</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Président</h4>}
        rchildren={
          <>
            <p>Le meilleur président de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Némo Demarquay</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Vice-Président</h4>}
        rchildren={
          <>
            <p>Le meilleur vice-président de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Guillaume Gros</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Trésorier</h4>}
        rchildren={
          <>
            <p>L'argent, c'est son élément</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Alban Godart</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Vice-Trésorier</h4>}
        rchildren={
          <>
            <p>Avec lui, on est jamais perdant</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Lori chahbazian</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Responsable Danse?</h4>}
        rchildren={
          <>
            <p>La meilleure danseuse de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Lisa Ginestet</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Membre pôle danse</h4>}
        rchildren={
          <>
            <p>Champion de France de jeux d'alcool</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Julien Delahaye</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Membre pôle son</h4>}
        rchildren={
          <>
            <p>Le meilleur des DJ</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Victor Leblanc</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>(vraie)Responsable organisation</h4>}
        rchildren={
          <>
            <p>Elle fait les meilleurs CR de réunions</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Anouck Bruguière</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Membre pôle communication</h4>}
        rchildren={
          <>
            <p>Le montage vidéo, c'est son élément</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Zakaria Belbali</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Responsable cuisine</h4>}
        rchildren={
          <>
            <p>On a jamais faim avec lui</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Alexandre Desbourdelles</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Membre pôle son</h4>}
        rchildren={
          <>
            <p>Le meilleur mixeur de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Baptiste Morée</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Membre pôle cuisine</h4>}
        rchildren={
          <>
            <p>Elle prépare les meilleirs gyozas</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Camille Urban</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
      <KimonoBox
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={<h4>Membre pôle son</h4>}
        rchildren={
          <>
            <p>Le plus grand pirate de tout les temps</p>
          </>
        }
        className={getRandomColor()}
      >
        <h3>Thomas Veau</h3>
        <KimonoImage img={"../../logo.png"} />
      </KimonoBox>
    </div>
  );
}
