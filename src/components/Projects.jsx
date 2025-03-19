import { useState } from "react";
import { Github, ExternalLink, X, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  links,
  videoUrl,
  onOpenModal,
}) => {
  return (
    <div className="bg-transparent border-[1px] border-red-700/20 rounded-lg overflow-hidden group backdrop-blur-sm">
      <div className="relative w-full group-hover:scale-105 transition-transform duration-500">
        <img src={image} alt={title} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t dark:from-black from-white/20 to-transparent" />
      </div>
      <div className="p-6">
        <p className="text-xl font-bold mb-3">{title}</p>
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
          <a
            href={links.github}
            target="_blank"
            className="bg-gradient-to-r from-transparent dark:to-zinc-800 to-zinc-100
             flex items-center justify-center border dark:border-zinc-800 text-black dark:text-white hover:border-[#ea384c]
             px-6 py-2 rounded-lg dark:hover:border-[#ea384c] transition-all duration-300 text-sm font-medium w-full"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </a>

          {videoUrl ? (
            <button
              onClick={() => onOpenModal(videoUrl)}
              className="flex items-center justify-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full"
            >
              <PlayCircle className="w-4 h-4 mr-2" />
              Preview
            </button>
          ) : (
            <a
              href={links.live}
              target="_blank"
              className="flex items-center justify-center bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              <span className="hidden md:inline">Live Demo</span>
              <span className="md:hidden">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-red-500"></div>
          </div>
        )}

        {/* Video */}
        <div className="relative w-full pt-[56.25%]">
          <iframe
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </div>
  );
};


const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo("");
  };

  const projects = [
    {
      title: "NeXoCard - AI Flashcard Generator",
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
      links: {
        github: "https://github.com/AmanWasti9/AI-FlashCard",
        live: "https://ai-flash-card.vercel.app/",
      },
    },
    {
      title: "Beacon - Write. Share. Connect.",
      description:
        "Engage, Share, and Connect: A Feature-Rich Blogging Platform",
      image: "/blog.png",
      tags: [
        "React JS",
        "Spring Boot",
        "MySQL",
        "Material UI",
        "HTML",
        "CSS",
        "Vercel",
      ],
      links: {
        github: "https://github.com/AmanWasti9/Blogging-App-Frontend",
        live: "#", // No live URL yet
      },
      videoUrl: "https://www.youtube.com/embed/jAvP_jpJP60",
    },

    {
      title: "COVID-19 Tracker - Real-Time Global COVID-19 Data Visualization",
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
      links: {
        github: "https://github.com/AmanWasti9/COVID-Tracker-React",
        live: "https://covid19-tracker-orpin-sigma.vercel.app/",
      },
    },
  ];

  return (
    <section
      id="Projects"
      className="px-5 md:px-16 py-24 relative bg-white dark:bg-black"
    >
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
            <ProjectCard key={index} {...project} onOpenModal={openModal} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium w-full md:w-auto"
          >
            View More Projects
          </Link>
        </div>
      </div>

      {/* Video Modal (Renders at the top level) */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={selectedVideo}
      />
    </section>
  );
};

export default Projects;
