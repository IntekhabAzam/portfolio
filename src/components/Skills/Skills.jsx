import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Skills.scss";

const skillsList = [
  {
    name: "Javascript",
    image: images.javascript,
  },
  {
    name: "Typescript",
    image: images.typescript,
  },
  {
    name: "Html",
    image: images.html,
  },
  {
    name: "CSS",
    image: images.css,
  },
  {
    name: "React",
    image: images.react,
  },
  {
    name: "Next.js",
    image: images.nextjs,
  },
  {
    name: "SCSS",
    image: images.sass,
  },
  {
    name: "Bootstrap",
    image: images.bootstrap,
  },
  {
    name: "Tailwindcss",
    image: images.tailwind,
  },
  {
    name: "Material UI",
    image: images.mui,
  },
  {
    name: "Framer Motion",
    image: images.framer,
  },
];

const experienceList = [
  {
    company: "Flipkart",
    title: "SDE-UI | 24 April, 2023 - Present",
    descLine1:
      "Working on frontent optimization and new features addition in Flipkart mobile and web application",
    descLine2:
      "collaborate with a team of skilled developers, designers, and product managers to translate wireframes and mockups into fully functional features.",
    descLine3: "Tech stack: React Native, React, Javascript, Typescript",
  },
  {
    company: "Wipro Limited",
    title: "Project Engineer | 26 July, 2021 - 2 Jan, 2023",
    descLine1:
      "Application Development, Maintenance and Production Support for Client - British Petroleum(bp).",
    descLine2:
      "Work on application Front-end enhancement and created more interactive user interface using HTML, CSS, JavaScript.",
    descLine3: "Code optimization for better performance of the application.",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skillsList.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill}
            >
              <div className="app__flex">
                <img src={skill.image} alt="skill" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__exp-list">
          {experienceList.map((experience, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__exp-item app__flex"
              key={index}
            >
              <h4 className="bold-text">{experience.company}</h4>
              <p className="p-text">{experience.title}</p>
              <ul>
                <li className="p-text">{experience.descLine1}</li>
                <li className="p-text">{experience.descLine2}</li>
                <li className="p-text">{experience.descLine3}</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
