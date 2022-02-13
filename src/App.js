import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { KimonoHello, KimonoImage, KimonoModal } from "./Components/Kimono";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

const cookies = new Cookies();
let cookiesAccepted = cookies.get("accept_cookies") !== undefined;

function App() {
  if (!cookiesAccepted) cookies.set("accept_cookies", "true", { path: "/" });
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const name = useSelector((state) => state.auth.user?.name);

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
                disappear={5}
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
        {!loggedIn ? (
          <Login />
        ) : (
          <>
            <KimonoHello name={name} />
            <KimonoImage img={logo} />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
