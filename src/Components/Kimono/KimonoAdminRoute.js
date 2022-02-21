import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function KimonoAdminRoute(props) {
    const { ...rest } = props;
    const admin = useSelector((state) => state.auth.user?.admin);
    return admin ? <Outlet {...rest} /> : <Navigate to={"/"} />;;
}