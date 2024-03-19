import "./featureProject.css";

const FeatureProject = () => {
  return (
    <section id="project" className="common-section-gray">
      <div className="common-wrapper">
        <div className="title_wrapper_featured">
          <hr />
          <h2 className="title">Featured Project</h2>
          <hr />
        </div>
        <div className="featured_project_info">
          <div className="featured_project_info_top">
            <div className="feat_pro_in_top_l"></div>
            <div className="feat_pro_in_top_r">
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida.
              </p>
              <hr />
              <div className="skill">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>Figma</span>
                <span>React</span>
              </div>
              <div className="icon">
                <i className="fa-brands fa-github"></i>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
          </div>
          <div className="featured_project_info_bottom">
            <div className="feat_pro_in_bottom_l">
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sit amet vestibulum felis. Vivamus facilisis ligula id
                fringilla gravida.
              </p>
              <hr />
              <div className="skill">
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
                <span>Figma</span>
                <span>React</span>
              </div>
              <div className="icon">
                <i className="fa-brands fa-github"></i>
                <i className="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div className="feat_pro_in_bottom_r"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProject;
