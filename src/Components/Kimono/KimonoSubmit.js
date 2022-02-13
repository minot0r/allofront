import "./Kimono.css";

export default function KimonoSubmit(props) {
  const { className, value, loading, ...rest } = props;
  return <input disabled={loading} className={"kimono-button " + (className || "")} type="submit" value={value} {...rest} />
}
