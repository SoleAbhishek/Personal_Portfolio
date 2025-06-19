
import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Full Stack Developer Intern",
        company: "iBridge LLC",
        duration: "Feb 2025 – Present",
        location: "Bengaluru, Remote",
        points: [
            "Contributed to Kairos IMS, an NGO platform built with Microsoft.",
            "Added dynamic module renaming and enhanced UI with React and Bootstrap.",
            "Integrated REST APIs and collaborated in Agile Sprints on UI/UX improvements",
        ],
    },
    {
        role: "This marks the beginning of my professional journey",
        company: "more to follow...",
        duration: "",
        location: "",
        points: [""],
    },
];

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
};

const Timeline = () => (
    <ol className="relative border-s border-primary mt-16">
        {experiences.map((item, idx) => (
            <motion.li
                key={idx}
                className="mb-10 ms-6"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={idx}
            >
                <span className="absolute flex items-center justify-center w-7 h-7 bg-indigo-100 rounded-full -start-3 ring-8 ring-white dark:ring-slate-900 dark:bg-indigo-900">
                    <svg
                        className="w-3 h-3 text-indigo-700 dark:text-indigo-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <circle cx="10" cy="10" r="10" />
                    </svg>
                </span>
                <h3 className="mb-0 text-lg font-semibold text-foreground">
                    {item?.role}
                </h3>
                <p className="text-sm text-primary font-medium mb-1">
                    {item?.company}
                </p>
                <time className="block mt-0 mb-2 text-sm font-normal leading-none text-muted-foreground">
                    {item?.duration}
                    {item?.location && ` | ${item?.location}`}
                </time>
                <ul className="mb-4 text-base font-normal text-muted-foreground pl-5">
                    {item?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </motion.li>
        ))}
    </ol>
);

const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};

const ExperienceSection = () => {
    return (
        <motion.section
            id="experience"
            className="py-16 bg-transparent"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                    My{" "}
                    <span className="text-primary">Experience</span>
                </h2>
                <Timeline />
            </div>
        </motion.section>
    );
};

export default ExperienceSection;   