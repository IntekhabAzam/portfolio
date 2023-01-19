import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import "./Navbar.scss";

const Navbar = () => {

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
        <a href="#">
          <AiOutlineHome />
        </a>
        <a href="#projects">
          <MdWorkOutline />
        </a>
        <a href="#skills">
          <BsPencilSquare />
        </a>
        <a href="#education">
          <HiOutlineAcademicCap />
        </a>
        <a href="#contact">
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
