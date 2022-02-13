import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
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
	]

  return (
	<div className="navbar-container">
	  <ul className="navbar-items">
		{items.map((item) => item)}
	  </ul>
	</div>
  );
}


function NavItem(props) {
	let location = useLocation();
	let className = "navbar-item";
	if (location.pathname === props.to) {
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