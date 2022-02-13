import "./Kimono.css";
import KimonoButton from "./KimonoButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_NOTIFICATION } from "../../Redux/reducers/notification";
import { createMessage } from "../../Redux/services/message";

export default function KimonoJoke(props) {
  const { className, ...rest } = props;
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={"kimono-joke " + (className || "")} {...rest}>
      <h1 className="citation">« En 2023, je vote Kimonodvie »</h1>
      <h1 className="success">
        Faites comme Jean-François et votez Kimonodvie pour 2023 🗳️
      </h1>
      {!clicked && (
        <KimonoButton
          className={"primary-bg"}
          onClick={() => {
            dispatch({
              type: ADD_NOTIFICATION,
              payload: createMessage(
                "Merci pour ton vote 💜",
                "On espère que le jour des éléctions tu seras à la hauteur !",
                { type: "info", duration: 15 }
              ),
            });
            setClicked(true);
          }}
        >
          Je vote Kimonodvie 💜
        </KimonoButton>
      )}
    </div>
  );
}
