import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollX = 0;
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollTop;
