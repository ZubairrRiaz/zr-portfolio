import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { TbFileTypeCss } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div
        className="bg-[#faedcd] md:h-auto md:w-full h-auto w-full"
        id="Skills"
      >
        <h1
          className="md:text-center md:text-6xl font-extrabold md:py-8 text-center text-5xl py-6 text-black"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          My <span className="text-[#fdc600]">Skills</span>
        </h1>

        <div className="md:grid md:grid-cols-2 place-items-center md:gap-y-16 grid grid-cols-1 gap-y-4">
          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <TiHtml5 className="md:text-6xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[95%] md:rounded-lg absolute bg-black h-1 w-[95%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">95%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <TbFileTypeCss className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[85%] md:rounded-lg absolute bg-black h-1 w-[85%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">85%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <RiJavascriptFill className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[80%] md:rounded-lg absolute bg-black h-1 w-[80%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">80%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <BiLogoTypescript className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[75%] md:rounded-lg absolute bg-black h-1 w-[75%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">75%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <RiTailwindCssFill className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[80%] md:rounded-lg absolute bg-black h-1 w-[80%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">80%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <FaReact className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[80%] md:rounded-lg absolute bg-black h-1 w-[80%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">80%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <RiNextjsFill className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[75%] md:rounded-lg absolute bg-black h-1 w-[75%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">75%</p>
          </div>

          <div
            className="md:w-[500px] w-[330px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <SiShadcnui className="md:text-5xl text-4xl text-black" />
            <div className="md:relative md:h-2 md:w-[500px] bg-white md:rounded-lg relative h-1 rounded-lg">
              <div className="md:absolute md:bg-black md:h-2 md:w-[95%] md:rounded-lg absolute bg-black h-1 w-[95%] rounded-lg"></div>
            </div>
            <p className="text-right font-bold md:text-lg text-black">95%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
