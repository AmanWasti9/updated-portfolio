import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, tagline, description, tags, image }) => (
  <div className="bg-transparent border-[1px] border-red-700/20 rounded-lg overflow-hidden group backdrop-blur-sm">
    <div className="relative w-full group-hover:scale-105 transition-transform duration-500">
      <img src={image} alt={title} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t dark:from-black from-white to-transparent" />
    </div>
    <div className="p-6">
      <p className="text-xl font-bold mb-3">{title}</p>
      <p className="text-md font-medium">{tagline}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-red-700/20 dark:text-white rounded-full text-xs hover:bg-zinc-800 hover:text-white transform hover:scale-110 hover:shadow-lg transition-all duration-350 ease-in-out font-medium"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {/* Code Button */}
        <button
          // className="flex items-center justify-center bg-black text-white border border-white px-4 py-1 rounded-lg hover:bg-zinc-900 w-full"
          className="bg-gradient-to-r from-transparent dark:to-zinc-800 to-zinc-100
           flex items-center justify-center border dark:border-zinc-800 text-black dark:text-white 
           px-6 py-2 rounded-lg dark:hover:border-[#ea384c] transition-all duration-300 text-sm font-medium w-full"
        >
          <Github className="w-4 h-4 mr-2" />
          Code
        </button>

        {/* Demo Button */}
        <button
          // className="flex items-center justify-center bg-red-800 text-white px-4 py-1 rounded-lg hover:bg-red-700 w-full"
          className="flex items-center justify-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "NeXoCard",
      tagline: "AI Flashcard Generator",
      description:
        "Learn Smarter, Retain Better: AI-Powered Flashcards and Study Tools.",
      image: "/NexoCardWeb.png",
      tags: [
        "React JS",
        "Material-UI",
        "Three JS",
        "Firebase",
        "Gemini AI",
        "LangChain",
        "Generative AI",
      ],
    },
    {
      title: "Pacer",
      tagline: "Your Go-To Sneaker Store",
      description:
        "A sleek and intuitive online sneaker store built with React JS, offering a smooth browsing experience with detailed product listings and a single-click purchase feature.",
      image: "/sneakerWeb.png",
      tags: ["React JS", "Material UI", "JavaScript", "CSS", "Material Icons"],
    },
    {
      title: "COVID-19 Tracker",
      tagline: "Real-Time Global COVID19 Data Visualization",
      description:
        "A real-time COVID-19 tracker that displays global statistics with interactive donut charts, offering insights into the pandemic's impact by country.",
      image: "/covidtrack.png",
      tags: [
        "React JS",
        "Material UI",
        "COVID-19 API ",
        "JavaScript",
        "CSS",
        "Chart JS",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-5 md:px-16">
        <h2 className="text-2xl font-bold text-center mb-2">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Showcasing my expertise in building scalable, user-friendly
          applications with modern technologies
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full md:w-auto">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
