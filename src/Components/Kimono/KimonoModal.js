import { useEffect, useState } from "react";
import "./Kimono.css";

export default function KimonoModal(props) {
  const {
    className,
    children,
    show,
    type,
    disappear,
    onDisappear,
    onClick,
    ...rest
  } = props;
  let [showed, setShowed] = useState(show ?? true);

  useEffect(() => {
    if (disappear) {
      setTimeout(() => {
        setShowed(false);
      }, disappear * 1000);
    }
  }, [disappear, setShowed]);

  return (
    <div onClick={onClick}>
      <div
        onClick={() => setShowed(false)}
        className={
          "kimono-modal " +
          (className || "") +
          (!showed ? " hidden" : "") +
          (type ? ` ${type}` : "")
        }
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
