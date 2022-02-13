import "./Kimono.css";

export default function KimonoLoading(props) {
  const { className, ...rest } = props;
  return (
    <div className={"kimono-loading " + (className || "")} {...rest}>
      <svg className="kimono-svg">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          Kimonodvie
        </text>
      </svg>
    </div>
  );
}
