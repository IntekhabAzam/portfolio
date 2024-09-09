import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Skills.scss";

const skillsList = [
  {
    name: "HTML",
    image: images.html,
  },
  {
    name: "CSS",
    image: images.css,
  },
  {
    name: "JavaScript",
    image: images.javascript,
  },
  {
    name: "TypeScript",
    image: images.typescript,
  },
  {
    name: "React",
    image: images.react,
  },
  {
    name: "Redux",
    image: images.redux,
  },
  {
    name: "React Query",
    image: images.reactQuery,
  },
  {
    name: "React Native",
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
    name: "Material UI",
    image: images.mui,
  },
  {
    name: "Git",
    image: images.git,
  },
];

const experienceList = [
  {
    company: "Flipkart",
    title: "SDE I - UI | Jan, 2024 - Present",
    descriptions: [
      "Working in the Machine Learning Platform team to build a UI platform aimed at showcasing their products and helping other business units of Flipkart and Myntra use the offered services.",
      "Leading the UI development and collaborating with backend developers to build a platform designed to facilitate the exploration, comparison, and utilization of various in-house and external Large Language Models.",
      "Developed an LLM Playground for users to compare different LLMs in real-time and submit feedback. The queries and feedback from the database are used by the Data Science team to fine-tune the LLMs.",
      "Developing a centralized repository for storing and managing in-house and external LLM Models.",
      "Tech stack: Javascript, Typescript, React, Redux, React Query",
    ],
  },
  {
    title: "SDE I - UI | April, 2023 - Jan, 2024",
    descriptions: [
      "Worked in Fintech Insurance team for developing new features in mobile app and mobile site.",
      "Developed a new default attach feature to offer insurance products at a very low cost to customers for BBD 2023 by updating the Product, Cart, and Checkout flows.",
      "Tech stack: Javascript, Typescript, React, Redux, React Native",
    ],
  },
  {
    company: "Wipro Limited",
    title: "Project Engineer | July, 2021 - Jan, 2023",
    descriptions: [
      "Application Development, Maintenance and Production Support for Client - British Petroleum(bp).",
      "Work on application Front-end enhancement and created more interactive user interface using HTML, CSS, JavaScript.",
      "Optimized the code to enhance the performance of application.",
    ],
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
              style={!experience.company ? { marginTop: 0 } : ""}
              key={index}
            >
              <h4 className="bold-text">{experience.company}</h4>
              <p className="p-text">{experience.title}</p>
              <ul>
                {experience.descriptions.map((description, index) => (
                  <li key={index} className="p-text">
                    {description}
                  </li>
                ))}
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
