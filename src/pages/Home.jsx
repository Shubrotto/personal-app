import { useEffect, useState } from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import FeatureProject from "../components/featureProject/FeatureProject";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Info from "../components/info/Info";
import OtherProject from "../components/otherProject/OtherProject";
import Quotes from "../components/quotes/Quotes";

const Home = () => {
  const [scrollBottom, setScrollBottom] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.screenY > 0 ? setScrollBottom(true) : setScrollBottom(false); // add bottom scroll
      // window.pageYOffset > 100
      //   ? { background: "#e7e7e7" }
      //   : { background: "white" };
    });
  }, []);
  const handleScrollDown = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // i want to add Animation for more attractive
  return (
    <>
      <Header />
      <Info scrollBottom={scrollBottom} handleScrollDown={handleScrollDown} />
      <About />
      <Quotes />
      <Experience />
      <FeatureProject />
      <OtherProject />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
