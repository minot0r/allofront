import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";

export default function KimonoAuthRoute(props) {
    const { redirect, ...rest } = props;
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const navigate = useNavigate();
    if(!loggedIn) {
        navigate(redirect);
    }
    return <Route {...rest} />;
}