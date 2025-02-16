
import { Code, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-5 md:px-16">
        <h2 className="text-3xl font-bold mb-2 text-center md:text-left">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a passionate full-stack developer with expertise in modern
              web technologies. My journey as a software professional began with
              a curiosity watching things work on the internet, which led me to
              dive deep into web development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I specialize in building robust and scalable applications using
              React, Next.js, and various backend technologies. My approach
              combines clean code practices with innovative problem-solving to
              create exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>
            <div className="mt-8 space-x-4 flex">
              <a
                href="/CV/Amanullah_CV.pdf"
                target="_blank"
                className="bg-red-600 text-white px-10 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full md:w-auto"
              >
                View CV
              </a>

              <a
                href="#projects"
                className="bg-gradient-to-r from-transparent dark:to-zinc-800 to-zinc-100
                px-6 py-2 border dark:border-zinc-800 text-black dark:text-white hover:border-[#ea384c]
                rounded-lg dark:hover:border-[#ea384c] transition-all duration-300 text-sm font-medium w-full md:w-auto"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default jump behavior
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 dark:bg-gray-800/40 dark:hover:bg-gray-900 bg-zinc-900 hover:bg-gray-900 rounded-xl  transition-all duration-300 shadow-lg hover:scale-110">
              <Code className="w-8 h-8 mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Frontend
              </h3>
              <p className="text-gray-400">
                React.js, JavaScript, React Native
              </p>
            </div>
            <div className="p-6 dark:bg-gray-800/40 dark:hover:bg-gray-900 bg-gray-900 hover:bg-zinc-900 rounded-xl transition-all duration-300 shadow-lg hover:scale-110">
              <Database className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-white">Backend</h3>
              <p className="text-gray-400">
                SpringBoot, Java, SQL, Firebase, Supabase
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
