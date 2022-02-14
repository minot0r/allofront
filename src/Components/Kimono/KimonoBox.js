import "./Kimono.css";

export default function KimonoBox(props) {
  const { className, title, children, footer, buttons, ...otherProps } = props;

  return (
    <div className={"kimono-box " + (className || "")} {...otherProps}>
      <div className="kimono-box-container">
        {title && (
          <div className="kimono-box-title">
            <h3>{title}</h3>
          </div>
        )}
        <div className="kimono-box-content">{children}</div>
        {buttons && <div className="kimono-box-buttons">{buttons}</div>}
      </div>
      {footer && <div className="kimono-box-footer">{footer}</div>}
    </div>
  );
}
