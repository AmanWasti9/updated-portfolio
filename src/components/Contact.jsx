import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-20 pb-5 bg-white dark:bg-black border-t dark:border-t-zinc-700"
    >
      <div className="container mx-auto px-5 md:px-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Syed Amanullah Wasti</h3>
            <p className="dark:text-gray-400 text-gray-600 mb-6">
              Building digital experiences with passion and precision.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 dark:text-gray-400 text-gray-600">
              <li>
                <a href="#about" className="hover:text-red-600">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-red-600">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-red-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  View My Job Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="dark:text-gray-400 text-gray-600 mb-2">
              amanwasti5@gmail.com
            </p>
            <p className="dark:text-gray-400 text-gray-600 mb-3">
              +92 3360348013
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/AmanWasti9"
                target="_blank"
                className="dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white hover:bg-zinc-200/50 transition-colors rounded-md p-3"
              >
                <FaGithub className="w-5 h-5 hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-wasti/"
                target="_blank"
                className="dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white hover:bg-zinc-200/50 transition-colors rounded-md p-3"
              >
                <FaLinkedin className="w-5 h-5 hover:scale-110" />
              </a>
              <a
                href="#"
                className="dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-white hover:bg-zinc-200/50 transition-colors rounded-md p-3"
              >
                <FaTwitter className="w-5 h-5 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t dark:border-t-zinc-700 text-center dark:text-gray-400 text-gray-600 text-sm">
          © 2023 Syed Amanullah Wasti. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
