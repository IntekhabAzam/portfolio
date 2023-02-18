import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Projects.scss";

const projectsList = [
  {
    title: "Catalogue Website",
    description: "A catalogue website for IT equipment vendor using Next.js and Sanity",
    projectLink: "https://computers-world.vercel.app/",
    codeLink: "https://github.com/IntekhabAzam/computers-world",
    image: images.project01,
  },
  {
    title: "YouTube Clone",
    description: "A YouTube clone application using React, Material UI and RapidAPI",
    projectLink: "https://intekhab-youtube-clone.vercel.app/",
    codeLink: "https://github.com/IntekhabAzam/youtube-clone",
    image: images.project02,
  },
  {
    title: "React Firebase Project",
    description: "A modern contact list CRUD website with integrated Firebase",
    projectLink: "https://invedus-assignment-six.vercel.app/",
    codeLink: "https://github.com/IntekhabAzam/Invedus-Assignment",
    image: images.project03,
  },
  {
    title: "React Typescript Store",
    description: "A modern shopping cart application using React, Typescript and Context API",
    projectLink: "https://intekhabazam.github.io/react-typescript-store/",
    codeLink: "https://github.com/IntekhabAzam/react-typescript-store",
    image: images.project04,
  },
  {
    title: "React Redux Store",
    description: "A modern shopping cart application using React and Redux",
    projectLink: "https://intekhabazam.github.io/react-redux-store/",
    codeLink: "https://github.com/IntekhabAzam/react-redux-store",
    image: images.project05,
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Projects</span> section
      </h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects"
      >
        {projectsList.map((project, index) => (
          <div className="app__project-item app__flex" key={index}>
            <div className="app__project-img app__flex">
              <img src={project.image} alt={project.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__project-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__project-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className="app__work-tag app__flex">
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <AiFillEye />
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, "app__projects-wrapper"),
  "projects",
  "app__whitebg"
);
