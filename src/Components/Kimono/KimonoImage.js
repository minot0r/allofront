import './Kimono.css';

export default function KimonoImage(props) {
  const { className, img, sizes, ...rest } = props;
  return (
    <div className={"kimono-image " + (className || "")} {...rest}>
      <img src={img} sizes={sizes} alt="kimono" />
    </div>
  );
}
