import React from "react";
import { useMediaQuery } from "react-responsive";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import "./Navbar.scss";

const NAV_CONTENT = [
  {
    section: "home",
    mobNavIcon: <AiOutlineHome />,
  },
  {
    section: "projects",
    mobNavIcon: <MdWorkOutline />,
  },
  {
    section: "skills",
    mobNavIcon: <BsPencilSquare />,
  },
  {
    section: "education",
    mobNavIcon: <HiOutlineAcademicCap />,
  },
  {
    section: "contact",
    mobNavIcon: <BiMessageSquareDetail />,
  },
];

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <>
      <nav className={isMobile ? "app__navbar-mobile" : "app__navbar"}>
        <ul className="app__navbar-links">
          {NAV_CONTENT.map((item) => (
            <li className="app__flex p-text" key={`link-${item.section}`}>
              {!isMobile && <div />}
              <a href={`#${item.section}`}>
                {isMobile ? item.mobNavIcon : item.section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
