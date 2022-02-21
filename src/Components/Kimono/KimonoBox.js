import "./Kimono.css";

export default function KimonoBox(props) {
  const {
    className,
    title,
    icon = "",
    children,
    footer,
    buttons,
    noMargin,
    reverse,
    ...otherProps
  } = props;

  return (
    <div
      className={
        "kimono-box " + (className ?? "") + (noMargin ? " no-margin" : "") + (reverse ? " reverse" : "")
      }
      {...otherProps}
    >
      <div className="kimono-box-container">
        {title && (
          <div className="kimono-box-title">
            <h3>
              {title} {icon}
            </h3>
          </div>
        )}
        <div className="kimono-box-content">{children}</div>
        {buttons && <div className="kimono-box-buttons">{buttons}</div>}
      </div>
      {footer && <div className="kimono-box-footer">{footer}</div>}
    </div>
  );
}
