import "./info.css";
import InfoImage from "../../assets/info.jpg";
import { useEffect, useState } from "react";

const Info = ({ scrollBottom, handleScrollDown }) => {
  // const [scrollBottom, setScrollBottom] = useState(true);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.screenY > 0 ? setScrollBottom(true) : setScrollBottom(false);
  //     // window.pageYOffset > 100
  //     //   ? { background: "#e7e7e7" }
  //     //   : { background: "white" };
  //   });
  // }, []);
  // const handleScrollDown = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div id="Info_section">
      <div className="wrapper_info">
        <div className="Info">
          <h1 className="info_title">Hi, I’m John Smith</h1>
          <h4 className="info_desc">I design and build things.</h4>
        </div>
        {scrollBottom && (
          <i
            className="fa-solid fa-angles-down info_down_icon"
            onClick={handleScrollDown}
          ></i>
        )}
        <div className="info_img">
          <img src={InfoImage} alt="" />
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Info;
