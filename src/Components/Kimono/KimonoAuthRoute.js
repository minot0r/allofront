import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function KimonoAuthRoute(props) {
    const { to, ...rest } = props;
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    return loggedIn ? <Outlet {...rest} /> : <Navigate to={to} />;;
}