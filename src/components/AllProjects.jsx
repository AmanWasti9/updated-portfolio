import { useState } from "react";
import { Github, ExternalLink, X, PlayCircle } from "lucide-react";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white bg-red-600 hover:bg-red-700 px-2 py-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative w-full pt-[56.25%]">
          <iframe
            src={videoUrl}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const AllProjects = () => {
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
      videoUrl: "/beacon.mp4", // Replace with actual video URL
    },
    {
      title: "PantryPilot - Your Digital Pantry Assistant",
      description:
        "A smart app to track pantry items, monitor expiry dates, and suggest recipes.",
      image: "/pantrytracker.png",
      tags: [
        "Next JS",
        "Material UI",
        "Firebase",
        "React",
        "JavaScript",
        "LangChain",
        "API Integration",
      ],
      links: {
        github: "https://github.com/AmanWasti9/pantry-tracker-app",
        live: "https://pantry-tracker-aman.vercel.app/",
      },
    },

    {
      title: "Pacer - Your Go-To Sneaker Store",
      description:
        "A sleek and intuitive online sneaker store built with React JS, offering a smooth browsing experience with detailed product listings and a single-click purchase feature.",
      image: "/sneakerWeb.png",
      tags: ["React JS", "Material UI", "JavaScript", "CSS", "Material Icons"],
      links: {
        github: "https://github.com/AmanWasti9/shoe-store",
        live: "https://sneaker-store-pi.vercel.app/",
      },
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

    {
      title: "Book Ecommerce Store - A Simple Online Bookstore",
      description:
        "A user-friendly, frontend-only online bookstore that lets you browse and explore a variety of books with a smooth, interactive interface.",
      image: "/bookwebsss.png",
      tags: ["HTML", "CSS", "BootStrap", "FontAwesome Icons", "JavaScript"],
      links: {
        github: "https://github.com/AmanWasti9/Book-Website",
        live: "https://book-website-lovat.vercel.app/",
      },
    },

    {
      title: "Expense Tracker - Manage Your Spending with Ease",
      description:
        "A simple, frontend-only expense tracker built with React.js, allowing users to easily input, categorize, and visualize their expenses for better financial management.",
      image: "/ExpenseTrack.png",
      tags: [
        "React JS",
        "CSS",
        "Material UI",
        "Material Icons",
        "JavaScript",
        "Chart JS",
      ],
      links: {
        github: "https://github.com/AmanWasti9/Expense-Track-React",
        live: "https://amanwasti9.github.io/Expense-Track-React/",
      },
    },

    {
      title: "TextUtils - Your Go-To Text Manipulation Tool",
      description:
        "TextUtils is a React-based web application offering versatile text processing features like text formatting, space removal, case conversion, Lorem Ipsum generation, and word counting.",
      image: "/TextUtilsWeb.png",
      tags: ["React JS", "JavaScript", "CSS", "Text Processing", "Material UI"],
      links: {
        github: "https://github.com/AmanWasti9/TextUtils",
        live: "https://amanwasti9.github.io/TextUtils/",
      },
    },
  ];

  return (
    <section
      id="allProjects"
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

export default AllProjects;
