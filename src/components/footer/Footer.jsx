import { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [scrollBottom, setScrollBottom] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY < 100) {
        setScrollBottom(true);
      } else {
        setScrollBottom(false);
      }
    });
  }, []);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <p>John Smith - 2023</p>
      {scrollBottom && (
        <i
          id="top"
          className="fa fa-arrow-up click_up"
          aria-hidden="true"
          onScroll={handleScrollTop}
        ></i>
      )}
    </footer>
  );
};

export default Footer;
