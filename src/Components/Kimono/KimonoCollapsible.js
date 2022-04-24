import "./Kimono.css";

import { useState } from "react";

export default function KimonoCollapsible(props) {
  const { collapsed = true, title, children } = props;

  const [collapsedState, setCollapsedState] = useState(collapsed);

  return (
    <div className={"kimono-collapsible " + (collapsedState && "collapsed")}>
      <div
        className="kimono-collapsible-header"
        onClick={() => setCollapsedState(!collapsedState)}
      >
        <h3>{title}</h3>
        <h3>{collapsedState ? "⬇️" : "⬆️"}</h3>
      </div>
      <div className="kimono-collapsible-content">{children}</div>
    </div>
  );
}
