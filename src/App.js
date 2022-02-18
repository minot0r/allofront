import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import {
  KimonoAdminRoute,
  KimonoAuthRoute,
  KimonoCenter,
  KimonoLink,
  KimonoModal,
} from "./Components/Kimono";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
import Allos from "./Allos/Allos";
import Allo from "./Allos/Allo";
import Account from "./Account/Account";
import Shortcut from "./Components/Shortcut/Shortcut";
import Liste from "./Components/Liste/Liste";
import Admin from "./Admin/Admin";
import CreateAllo from "./Components/Admin/CreateAllo";
import Slots from "./Components/Allo/Slots";
import Reserve from "./Components/Allo/Reserve";

const cookies = new Cookies();
let cookiesAccepted = cookies.get("accept_cookies") !== undefined;

function App() {
  if (!cookiesAccepted) cookies.set("accept_cookies", "true", { path: "/" });
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  return (
    <div className="app-container">
      {!cookiesAccepted ? (
        <KimonoModal show={!cookiesAccepted}>
          <p>
            <strong>Ce site web utilise des cookies pour fonctionner.</strong>
            <br />
            Ces cookies ne sont pas utilisés pour des fins publicitaires.
          </p>
        </KimonoModal>
      ) : null}
      <div className="app-content">
        {notifications.length > 0 && (
          <div className="messages">
            {notifications.map((message, index) => (
              <KimonoModal
                disappear={message.duration || 5}
                key={index}
                type={message.type}
                show={true}
              >
                <h3>{message.title}</h3>
                <p>{message.body}</p>
              </KimonoModal>
            ))}
          </div>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allos" element={<Allos />} />
          <Route path="/allos/:alloId" element={<Allo />} />
          <Route path="/allos/:alloId" element={<KimonoAuthRoute />} >
            <Route path="slots" element={<Slots />} />
            <Route path="reserve/:slotId" element={<Reserve />} />
          </Route>
          <Route path="/bde" element={<Liste />} />
          <Route
            path="/compte"
            element={
              <Account />
            }
          />
          <Route path="/admin" element={<KimonoAdminRoute />} >
            <Route index element={<Admin />} />
            <Route path="createallo" element={<CreateAllo />} />
          </Route>
          <Route path="*" element={
            <KimonoCenter width={"80%"} style={{textAlign: "center"}}>
              <h1>👷 4️0️4️</h1>
              <h2>Page non trouvée</h2>
              <KimonoLink to="/" className={"success-bg"}>
                Retourner à l'accueil
              </KimonoLink>
            </KimonoCenter>
          }>
          </Route>
        </Routes>
        <Shortcut />
      </div>
    </div>
  );
}

export default App;
