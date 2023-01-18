import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Education.scss";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

const educationList = [
  {
    schoolLogo: images.jamia,
    schoolName: "Jamia Millia Islamia | New Delhi",
    course: "Bachlor of Technology",
    result: "9.38 CGPA",
    background: "#ecfbec",
    circleColor: "#4bc94b",
  },
  {
    schoolLogo: images.jamia,
    schoolName: "Jamia Senior Secondary School | New Delhi",
    course: "Higher Secondary School Certificate",
    result: "67.2 %",
    background: "#f4f4ff",
    circleColor: "#6971cf",
  },
  {
    schoolLogo: images.xaviers,
    schoolName: "St. Xaviers Jr/Sr School | Muzaffarpur, Bihar",
    course: "Secondary School Cirtificate",
    result: "10 CGPA",
    background: "#fff7f7",
    circleColor: "#ff5f5f",
  },
];

const Education = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Educational</span> Journey
      </h2>

      <div className="app__education-container">
        {educationList.map((education, index) => (
          <div className="app__education-list app__flex" key={index}>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__education-logo app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: education.background }}
              >
                <img src={education.schoolLogo} alt="education" />
              </div>
            </motion.div>
            <div
              className="circle"
              style={{ backgroundColor: education.circleColor }}
            />
            <motion.div
              whileInView={{ x: [-50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__education-content"
            >
              <h4 className="bold-text">{education.schoolName}</h4>
              <p className="p-text">{education.course}</p>
              <p className="p-text">{education.result}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__whitebg"
);
