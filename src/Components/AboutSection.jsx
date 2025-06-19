import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3, type: "spring" } },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.7, type: "spring" },
  }),
};

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">
              Aspiring Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a CS undergrad and passionate frontend developer, focused on building responsive and visually engaging web apps using modern tools like React, JavaScript, Tailwind, etc. I'm eager to learn, grow, and contribute to real-world projects
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/resume/Abhishek_Sole.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Building responsive and modern web applications using React, JavaScript, and Tailwind CSS.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Problem Solving",
                desc: "Applying logical thinking and coding skills to solve real-world challenges through projects.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Learning and Growth",
                desc: "Exploring new technologies, improving problem-solving skills, and building real-world projects",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="gradient-border p-6 card-hover"
                variants={cardsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};