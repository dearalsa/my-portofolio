export default function AboutSection() {
  return (
    <div id="about" className="about-container">
      <div className="about-wrapper">
        <div className="about-top">
          <div className="about-text">
            <h2 className="about-title">
              <span className="about-a">A</span>bout <span className="about-m">M</span>e
            </h2>

            <p className="about-desc">
              Hi! I'm Putri Salsabila, a junior Web Developer who enjoys creating
              clean and user-friendly websites. I love learning new technologies
              and turning ideas into simple, functional designs.
            </p>
          </div>

          <div className="about-photo-wrapper">
            <img src="/pinklight.svg" alt="Pink Light" className="pink-light" />
            <img src="/alsa.svg" alt="Putri Salsabila" className="about-photo" />
          </div>
        </div>

        <div className="about-box-container">
          <div className="about-box box-one"></div>
          <div className="about-box box-two"></div>
        </div>
      </div>
    </div>
  );
}
