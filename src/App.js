import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import { KimonoAuthed, KimonoConstruct, KimonoModal } from "./Components/Kimono";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
import Allos from "./Allos/Allos";

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
                disappear={message.duration || 5}
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
          <Route path="/shop" element={<KimonoConstruct />} />
          <Route path="/bde" element={<KimonoConstruct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
