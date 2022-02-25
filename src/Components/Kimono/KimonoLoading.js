import "./Kimono.css";
import Lottie from 'react-lottie';
import * as animationData from './fan-animation.json';

export default function KimonoLoading(props) {
  const { className, ...rest } = props;
  const options = {
    loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  }
  return (
    <div className={"kimono-loading " + (className || "")} {...rest}>
      <Lottie options={options}>

      </Lottie>
    </div>
  );
}
