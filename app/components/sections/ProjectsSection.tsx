import { FiArrowRight } from "react-icons/fi";

export default function ProjectsSection() {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-top">
          <div className="projects-text">
            <h2 className="projects-title">
              <span className="projects-m">M</span>y{" "}
              <span className="projects-p">P</span>rojects
            </h2>
          </div>
        </div>

        <div className="projects-list">
          <div className="project-card">
            <div className="project-image">
              <img src="/projects/the-licioys.png" alt="Gorengan Iyal" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <h3>The Licioys – Gorengan Crispy Website</h3>
              <p>
                The Licioys, usaha gorengan “Papa Iyal”, menyajikan camilan renyah dengan pemesanan yang mudah.
              </p>
              <a
                href="https://dearalsa.github.io/gorengan-iyal-web/"
                target="_blank"
                className="project-btn custom-btn"
              >
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
                View Details
              </a>
            </div>
          </div>

          <div className="project-card reverse">
            <div className="project-content">
              <div className="project-tags">
                <span className="tag-pink">HTML</span>
                <span className="tag-pink">CSS</span>
                <span className="tag-pink">JavaScript</span>
              </div>
              <h3>Carlos Sainz - Portofolio Simple Website</h3>
              <p>
                Portofolio bertema Carlos dengan desain minimalis, navigasi simpel, dan fokus pada profil serta keahlian.
              </p>
              <a
                href="https://dearalsa.github.io/carlos-portofolio/"
                target="_blank"
                className="project-btn custom-btn"
              >
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
                View Details
              </a>
            </div>
            <div className="project-image">
              <img src="/projects/carlos-portofolio.png" alt="Website Carlos Portofolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
