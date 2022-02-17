export default function KimonoSwitch(props) {
  let { className, onChange, title, val, ...rest } = props;
  return (
    <div className="kimono-switch-container">
      <h3>{title}</h3>
      <label className={"kimono-switch " + (className || "")} {...rest}>
        <input
          type="checkbox"
          checked={val}
          onChange={(e) => {
            onChange && onChange(e.target.checked);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
