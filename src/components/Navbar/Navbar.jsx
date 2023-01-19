import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import "./Navbar.scss";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav className="app__navbar">
        <ul className="app__navbar-links">
          {["home", "projects", "skills", "education", "contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </nav>
      {/* Tab/Mobile screen Navigation bar*/}
      <nav className="icon-navbar">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <MdWorkOutline />
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BsPencilSquare />
        </a>
        <a
          href="#education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "#education" ? "active" : ""}
        >
          <HiOutlineAcademicCap />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
