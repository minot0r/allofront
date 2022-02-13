import "./mesh1.png";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="header-title">Kimonodvie</h1>
        <h3 className="header-subtitle">2023</h3>
        <h3 className="header-chinese">生活和服</h3>
      </div>

      <div className="home-buttons">
        <Link to="/program" className="button">
          Programme
        </Link>
        <Link to="/shop" className="button">
          Shop
        </Link>
      </div>

      <div className="home-center">
        <div className="home-card">
          <div className="card-title">
            <div className="card-title-text">
              <h1>Nos allos</h1>
            </div>
          </div>
          <div className="card-content">
            <ul>
              <li className="allo-container">
                <div className="allo-content">
                  <div className="allo-left">
                    <div className="allo-header">
                      <h1>Allo 1</h1>
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </div>
                  </div>
                  <div className="allo-right">
                    <span className="allo-price">5€</span>
                  </div>
                </div>
              </li>
              <li className="allo-container">
                <div className="allo-content">
                  <div className="allo-left">
                    <div className="allo-header">
                      <h1>Allo 1</h1>
                      <h3>Lorem ipsum dolor sit amet</h3>
                    </div>
                  </div>
                  <div className="allo-right">
                    <span className="allo-price">5€</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grad-mesh2" />
      </div>

      <div className="grad-mesh1" />
    </div>
  );
}
