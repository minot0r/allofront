import { useSelector } from "react-redux";
import { KimonoNavBox } from "../Components/Kimono";

export default function Admin() {
    const allosLength = useSelector((state) => state.allos.allos.length);
  return (
    <div>
        <KimonoNavBox
        className={"danger-bg"}
            to={"/admin/current"}
            title={"Voir les créneaux en cours"}
            icon={"🏃"}
            footer={<h3>5 créneaux en cours</h3>}
        >
            <p>Voir les créneaux en cours (5)</p>
        </KimonoNavBox>
      <KimonoNavBox
        className="success-bg"
        to="/admin/createallo"
        title="Créer un nouveau allo"
        icon="📝"
      >
        <p>Créer un nouveau allo</p>
      </KimonoNavBox>
      <KimonoNavBox
        className="success-bg"
        to="/admin/createslot"
        title="Créer un nouveau créneau"
        icon="📝"
      >
        <p>Créer un nouveau créneau</p>
      </KimonoNavBox>
      <KimonoNavBox
        className="warning-bg"
        to="/admin/editallo"
        title="Modifier un allo"
        icon="📝"
        footer={<h3>{allosLength} allos</h3>}
      >
        <p>Modifier/Supprimer un allo</p>
      </KimonoNavBox>
      <KimonoNavBox
        className="warning-bg"
        to="/admin/editslot"
        title="Modifier un créneau"
        icon="📝"
      >
        <p>Modifier/Supprimer un créneau</p>
      </KimonoNavBox>
    </div>
  );
}
