import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollTop;
