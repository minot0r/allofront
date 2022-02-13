import { KimonoCenter } from "../Components/Kimono";
import "./Allos.css";

export default function Allos(props) {
  return (
    <div className="allos-container">
      <KimonoCenter width={"80%"}>
        <h1>Coucou 👋</h1>
        <h3>
          Les allos payants sont marqués en{" "}
          <span className="success-bg">VERT</span> et allos gratuits sont
          marqués en <span className="danger-bg">ROUGE</span>
        </h3>
      </KimonoCenter>
    </div>
  );
}
