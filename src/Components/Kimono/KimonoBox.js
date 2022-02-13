import "./Kimono.css";

export default function KimonoBox(props) {
  const { className, title, children, footer, ...otherProps } = props;

  return (
    <div className={"kimono-box " + (className || "")} {...otherProps}>
      {title && (
        <div className="kimono-box-title">
          <h3>{title}</h3>
        </div>
      )}
      <div className="kimono-box-content">{children}</div>
      {footer && <div className="kimono-box-footer">{footer}</div>}
    </div>
  );
}
