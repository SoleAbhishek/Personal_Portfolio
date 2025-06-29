
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI Image Editor(Ongoing)",
    description: "An AI image editing tool using React and Tailwind, that allows users to enhance and modify images with ease.",
    image: "/projects/project_1.png",
    tags: ["React", "TailwindCSS", "PicWish API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Food Calorie Detector",
    description:
      "A web application that detects food items and their calorie content using ChatGPT Vision API. ",
    image: "/projects/project_2.png",
    tags: ["JavaScript", "HTML&CSS", "Django"],
    demoUrl: "https://calorie-server-1.onrender.com",
    githubUrl: "https://github.com/SoleAbhishek/Calorie_Tracker",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A web application that provides weather information and forecasts. Built this when I was learning JavaScript.",
    image: "/projects/project_3.png",
    tags: ["JavaScript", "OpenWeatherAPI"],
    demoUrl: "https://soleabhishek.github.io/weather-app/",
    githubUrl: "https://github.com/SoleAbhishek/weather-app",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, type: "spring" },
  }),
};

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="py-24 px-4 min-h-screen relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={key}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SoleAbhishek"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};