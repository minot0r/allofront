import { useSelector } from "react-redux";
import { KimonoBox, KimonoLoading } from "../Kimono";

export default function VendredjApplications() {
  const loading = useSelector((state) => state.vendredj.loading);
  const applications = useSelector((state) => state.vendredj.applications);

  if (loading) return <KimonoLoading />;

  return applications.map((app) => {
    return (
      <KimonoBox className="success-bg" title={app.name}>
        <p>{app.instagram.startsWith("@") ? "" : "@" + app.instagram}</p>
        <p>Mixe : {app.musicType}</p>
      </KimonoBox>
    );
  });
}
