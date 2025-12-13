import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      <div id="home" className="
        min-h-screen bg-[#FFF5F7] flex items-start justify-center 
        pt-44 sm:pt-28
      ">
        <div className="text-center">
          <div className="relative mt-8 sm:mt-0">

            <img 
              src="ribbon.svg"
              alt="Cute Tomato Icon"
              className="ribbon-img"
            />

            <span
              className="btn-im text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 lg:px-7 py-1 rounded-full border border-black"
            >
              I'm
            </span>

            <span
              className="btn-name text-lg sm:text-xl md:text-2xl lg:text-2xl px-10 sm:px-11 md:px-12 lg:px-14 py-2 rounded-full border border-black"
            >
              Putri Salsabila
            </span>

            <h1 className="mb-4">
              <span className="hello-h">H</span>
              <span className="hello-rest">ello!</span>
            </h1>
          </div>

          <p className="hello-desc text-base sm:text-lg md:text-xl font-serif text-gray-800">
            <span className="typing-text">Here's a little about me and what I do, in a simple snapshot.</span>
          </p>
        </div>
      </div>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
