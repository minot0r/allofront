import "./Kimono.css";

export default function KimonoButton(props) {
  const { className, wrapWith, ...rest } = props;
  return wrapWith ? (
    <wrapWith>
      <button className={"kimono-button " + (className ? className : "")} {...rest} />
    </wrapWith>
  ) : (
    <button className={"kimono-button " + (className ? className : "")} {...rest} />
  );
}
