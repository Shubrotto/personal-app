import "./about.css";
import AboutMe from "../../assets/my.jpg";

const About = () => {
  return (
    <div id="about" className="common-section-gray">
      <div className="common-wrapper">
        <div className="title_wrapper">
          <hr />
          <h2 className="title">About Me</h2>
          <hr />
        </div>
        <div className="about_me_info">
          <div className="about_me_info_left">
            <div className="about_me_desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida. Suspendisse ultricies sollicitudin lacus, et
                rutrum nunc bibendum sed.
              </p>
              <p>
                Donec tincidunt tellus sed libero ultricies, eu semper enim
                molestie. Etiam lorem quam, tincidunt nec malesuada eu, interdum
                nec leo. Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Morbi placerat tortor sed felis
                tristique.
              </p>
              <p>
                Nunc aliquam magna ut nunc vestibulum, ut dictum nulla sagittis.
                Cras egestas magna sed nisl pellentesque, sed lobortis felis
                convallis. Phasellus eget ex at est lobortis iaculis eget non
                risus. Etiam ultricies at est sit amet condimentum.
              </p>
            </div>
          </div>
          <div className="about_me_info_right">
            <img src={AboutMe} alt="my image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
