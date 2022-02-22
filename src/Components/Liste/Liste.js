import { useState } from 'react';
import { KimonoBox, KimonoImage } from '../Kimono';
import "./Liste.css";

export default function Liste() {
    const [clicked, setClicked] = useState(false);

    return <div className="liste-container">
        <KimonoBox 
        reverse={clicked}
        onClick={() => setClicked(!clicked)}
        footer={
            <h4>Membre pôle communication</h4>
        }
        rchildren={
            <>
                <p>Le plus grand pirate de tout les temps</p>
            </>
        }
        className={"primary-bg"}>
            <h3>Valentin Giorgetti</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <KimonoImage img={'../../logo.png'} />
        </KimonoBox>
    </div>
}