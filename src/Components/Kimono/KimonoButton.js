import "./Kimono.css";

export default function KimonoButton(props) {
  const { className, wrapWith, loading, ...rest } = props;
  const button = <button disabled={loading} className={"kimono-button " + (className || "")} {...rest} />
  return button;
}
