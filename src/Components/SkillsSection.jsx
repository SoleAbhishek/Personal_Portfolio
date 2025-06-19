
import { motion } from "framer-motion";


const skillBadgeVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: "spring" },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

export const SkillsSection = () => {
  
  const badges = [
    {
      icon: <i className="devicon-html5-plain colored text-xl"></i>,
      label: "HTML",
    },
    {
      icon: <i className="devicon-css3-plain colored text-xl"></i>,
      label: "CSS",
    },
    {
      icon: <i className="devicon-java-plain colored text-xl"></i>,
      label: "Java",
    },
    {
      icon: <i className="devicon-javascript-plain colored text-xl"></i>,
      label: "JavaScript",
    },
    {
      icon: <i className="devicon-react-original colored text-xl"></i>,
      label: "React",
    },
    {
      icon: <i className="devicon-bootstrap-plain colored text-xl"></i>,
      label: "Bootstrap",
    },
    {
      icon: <i className="devicon-github-original colored text-xl"></i>,
      label: "Git/Github",
    },
    {
      icon: <i className="devicon-reactbootstrap-plain colored text-xl"></i>,
      label: "ReactBootstrap",
    },
    {
      icon: <i className="devicon-mysql-plain colored text-xl"></i>,
      label: "SQL",
    },
    {
      icon: <i className="devicon-tailwindcss-plain colored text-xl"></i>,
      label: "Tailwind CSS",
    },
  ];

  return (
    <motion.section
      id="skills"
      className="max-w-xl mx-auto mt-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary"> Skills</span>
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {badges.map((badge, i) => (
          <motion.span
            key={badge.label}
            className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-full text-base font-medium shadow"
            variants={skillBadgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i}
          >
            {badge.icon}
            {badge.label}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};