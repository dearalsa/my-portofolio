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
                rel="noopener noreferrer"
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
              <h3>Carlos Sainz - Portfolio Simple Website</h3>
              <p>
                Portofolio bertema Carlos dengan desain minimalis, navigasi simpel, dan fokus pada profil serta keahlian.
              </p>
              <a
                href="https://dearalsa.github.io/carlos-portofolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn custom-btn"
              >
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
                View Details
              </a>
            </div>
            <div className="project-image">
              <img src="/projects/carlos-portofolio.png" alt="Website Carlos Portfolio" />
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/Q-Read.png" alt="Q-Read Project" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span>Next.js</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <h3>Q-Read - Online Qur'an Reading</h3>
              <p>
                Q-Read adalah platform baca Al-Qur’an online dengan audio murottal serta tema terang dan gelap.
              </p>
              <a
                href="https://qread-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
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
              <h3>Bookshelf – A Personal Digital Library</h3>
              <p>
                Bookshelf adalah website sederhana untuk menyimpan dan mengelola koleksi buku pribadi secara digital.
              </p>
              <a
                href="https://dearalsa.github.io/personal-library/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn custom-btn"
              >
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
                View Details
              </a>
            </div>
            <div className="project-image">
              <img src="/projects/personal-library.png" alt="Personal Library Project" />
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/task-notes.png" alt="Task Notes Project" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <h3>Task Notes – Simple Daily Task Manager</h3>
              <p>
                Task Notes adalah aplikasi sederhana untuk mencatat dan mengelola tugas harian.
              </p>
              <a
                href="https://dearalsa.github.io/task-notes/"
                target="_blank"
                rel="noopener noreferrer"
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
                <span className="tag-pink">Laravel</span>
                <span className="tag-pink">React</span>
                <span className="tag-pink">PHP</span>
                <span className="tag-pink">Tailwind CSS</span>
              </div>
              <h3>SafeMind - Mental Health Support Platform</h3>
              <p>
                Platform digital untuk mendukung kesehatan mental melalui konten dan rujukan ke akun edukasi terkait.
              </p>
              <a
                href="https://github.com/dearalsa/SafeMind"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn custom-btn"
              >
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
                View Details
              </a>
            </div>
            <div className="project-image">
              <img src="/projects/safe-mind.png" alt="SafeMind Project" />
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/projects/dashboard-crud.png" alt="Dashboard CRUD Project" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span>Laravel</span>
                <span>React</span>
                <span>PHP</span>
                <span>Tailwind CSS</span>
              </div>
              <h3>Dashboard CRUD - Simple Data Management</h3>
              <p>
                Dashboard CRUD adalah web untuk mengelola data dengan fitur Create, Read, Update, dan Delete.
              </p>
              <a
                href="https://github.com/dearalsa/laravel-dashboard-crud"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn custom-btn"
              >
                <span className="btn-icon">
                  <FiArrowRight />
                </span>
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
