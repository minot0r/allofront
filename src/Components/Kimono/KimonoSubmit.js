import "./Kimono.css";

export default function KimonoSubmit(props) {
  const { className, wrapWith, value, ...rest } = props;
  return wrapWith ? (
    <wrapWith>
      <input className={"kimono-button " + (className || "")} type="submit" value={value} {...rest} />
    </wrapWith>
  ) : (
    <input className={"kimono-button " + (className || "")} type="submit" value={value} {...rest} />
  );
}
