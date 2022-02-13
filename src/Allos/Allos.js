import { useSelector, shallowEqual } from "react-redux";
import { KimonoCenter, KimonoLoading, KimonoNavBox } from "../Components/Kimono";
import "./Allos.css";

export default function Allos() {
  let loading = useSelector((state) => state.allos.loading, shallowEqual);
  let allos = useSelector((state) => state.allos.allos);

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
      {!loading ? (
        <>
          {allos.map((allos, index) => (
            <KimonoNavBox key={index} to={`/allos/${allos.id}`} title={allos.name}>
              <h3>{allos.description}</h3>
              <h3>{allos.price}</h3>
            </KimonoNavBox>
          ))}
        </>
      ) : (
        <KimonoLoading />
      )}
    </div>
  );
}
