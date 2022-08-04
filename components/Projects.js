import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io";

function Projects() {
  const DesignCard = () => {
    return <div></div>;
  };

  const projects = [
    {
      projectName: "Rest Countries API",
      desc: "An application that allows a user to filter through regions and indivual countries to return some information on the selected country",
      link: "/#",
    },

    {
      projectName: "Good Soup - Spotify API",
      desc: "An application that allows an authenticated spotify user to filter through their 20 most played tracks",
      disc: "User access may be limited, click here for more info",
      link: "https://jmrc1995.github.io/goodsoup/",
    },
    {
      projectName: "Todo",
      desc: "A simple task managing application.",
      link: "https://jmrc1995.github.io/Todo-App-JMRC/",
    },
  ];

  const designs = [
    {
      projectName: "Greensia Earthworks Landing Page",
      desc: "Landing page",
      link: "https://jmrc1995.github.io/Room-Homepage-Master/",
    },
    {
      projectName: "Room-Homepage",
      desc: "Landing page",
      link: "https://jmrc1995.github.io/Room-Homepage-Master/",
    },
  ];

  return (
    <div className="  h-full p-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h1 className="grid grid-row-1 lg:justify-items-end md:mr-20 font-dmserif font-bold text-5xl text-white dark:text-black ">
          Projects
        </h1>
        <ul className="  grid grid-cols-1 p-2  mt-2 gap-5 text-white dark:text-black ">
          {" "}
          {projects.map((project) => (
            <li className="mt-5 md:mt-0 " key={project.projectName}>
              <a href={project.link} className="font-dmserif text-lg flex ">
                {project.projectName}<AiOutlineLink size={20} className="hover:text-orange ml-2"/> 
              </a>
              <p className="font-opensans text-sm"> {project.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-baseline">
        <h1 className=" grid grid-row-1 lg:justify-items-end md:mr-20 font-dmserif font-bold text-5xl pt-20 text-white dark:text-black">
          Designs
        </h1>
        <ul className=" grid grid-cols-1 p-2 mt-2 gap-5 text-white dark:text-black">
          {" "}
          {designs.map((design) => (
            <li className="mt-5 md:mt-0" key={design.projectName}>
            
              <a href={design.link} className=" font-dmserif text-lg flex items-center">
                {design.projectName} <AiOutlineLink size={20} className="hover:text-orange ml-2"/> 
                
              </a>
              <p className="text-sm font-opensans"> {design.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
