import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  let location = useLocation();
  const isDeep = location.pathname.split("/").length > 2;
  const [reverse, setReverse] = useState(false);

  const items = [
    NavItem({
      to: "/",
      text: "Accueil",
    }),
    NavItem({
      to: "/allos",
      text: "Allos",
    }),
    NavItem({
      to: "/shop",
      text: "Shop",
    }),
    NavItem({
      to: "/bde",
      text: "La Liste",
    }),
  ];

  return (
    <div className="navbar-container">
      <div
        className={
          "navbar-back " + (isDeep ? "active" : reverse ? "reverse" : "")
        }
        onClick={() => {
          window.history.back();
          setReverse(true);
        }}
      >
        <span>{"<"}</span>
      </div>
      <ul className="navbar-items">{items.map((item) => item)}</ul>
    </div>
  );
}

function NavItem(props) {
  let location = useLocation();
  let className = "navbar-item";
  if ("/" + location.pathname.split("/")[1] === props.to) {
    className += " active";
  }
  return (
    <li key={props.to} className={className}>
      <Link to={props.to}>
        <span>{props.text[0]}</span>
        <span>{props.text.slice(1)}</span>
      </Link>
    </li>
  );
}
