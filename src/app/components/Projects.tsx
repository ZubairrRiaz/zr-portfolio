import React from "react";
import Link from "next/link";

const typeScriptProjects = [
  {
    name: "Simple Calculator",
    link: "https://github.com/ZubairrRiaz/zr2164-simple_calculator/blob/main/main.ts",
    id: 1,
    text: "A Simple Cli Calculator With + - / * Functionality.",
  },
  {
    name: "Number Guessing",
    link: "https://github.com/ZubairrRiaz/zr2164-cli_number_guessing/blob/main/cliNumber.ts",
    id: 2,
    text: "Guess The Number Until You Got The Right Answer.",
  },
  {
    name: "Ts Exercise",
    link: "https://github.com/ZubairrRiaz/zr2164-45_question-_exercise",
    id: 3,
    text: "45 TypeScript Exercise Questions For Practicing What you Learn.",
  },
  {
    name: "ATM Machine",
    link: "https://github.com/ZubairrRiaz/zr2164-atm_machine/blob/main/atm.ts",
    id: 4,
    text: "Atm Machine With Cash Credit, Cash Deposit, Billpay Functionality.",
  },
  {
    name: "Todo List",
    link: "https://github.com/ZubairrRiaz/zr2164-todo_list/blob/main/main.ts",
    id: 5,
    text: "The lists that we generally use to maintain our day-to-day tasks.",
  },
  {
    name: "Currency Converter",
    link: "https://github.com/ZubairrRiaz/zr2164-Currency_converter/blob/main/app.ts",
    id: 6,
    text: "Currency Converter. Where You Can Convert Dollars Into Any Currency.",
  },
  {
    name: "Word Counter",
    link: "https://github.com/ZubairrRiaz/zr2164-word_counter/blob/main/main.ts",
    id: 7,
    text: "Word counter is The Counter of Your Input Text Words.",
  },
  {
    name: "S-M-System",
    link: "https://github.com/ZubairrRiaz/zr2164-Student_Management_System/blob/main/app.ts",
    id: 8,
    text: "Student-Managemnt-System Where You Can Manage Students.",
  },
  {
    name: "Quiz App",
    link: "https://github.com/ZubairrRiaz/zr2164-Quiz_App/blob/main/main.ts",
    id: 9,
    text: "A Collection of Questions of Different Types Like Sports, History.",
  },
  {
    name: "Adventure Game",
    link: "https://github.com/ZubairrRiaz/zr2164-Adventure_Game/blob/main/main.ts",
    id: 10,
    text: "Game genre where the player takes on a role of a character in a story. ",
  },
  {
    name: "Countdown Timer",
    link: "https://github.com/ZubairrRiaz/zr2164-CountDown_Timer/blob/main/main.ts",
    id: 11,
    text: "For Displaying Remaining Time Like Discount Offers Etc.",
  },
  {
    name: "OOP My-Bank",
    link: "https://github.com/ZubairrRiaz/zr2164-OOP_MyBank/blob/main/app.ts",
    id: 12,
    text: "Object-oriented-programming bank With Fully Banking Functionality.",
  },
];

const htmlCssTsProjects = [
  {
    name: "Amazon",
    link: "https://github.com/ZubairrRiaz/zr2164-simple_calculator/blob/main/main.ts",
    id: 1,
    text: "Amazon Clone.",
  },
  {
    name: "Netflix",
    link: "https://superlative-hotteok-532719.netlify.app/",
    id: 2,
    text: "Netflix Clone.",
  },
  {
    name: "Resume Builder",
    link: "https://zubi-hackathon-resume.netlify.app/",
    id: 3,
    text: "A Dynamic Resume.",
  },
];

const Projects = () => {
  return (
    <>
      <div className="bg-black" id="Projects">
        <h1
          className="text-center md:text-center text-white text-5xl md:text-5xl font-extrabold py-12"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          My <span className="text-[#fdc600]">Projects</span>
        </h1>
      </div>
      <div className="bg-black">
        <p
          className="text-white text-center text-2xl p-6 font-bold md:text-3xl md:pb-5"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          Typescript Only Projects
        </p>
      </div>
      <div className="md:h-auto h-auto md:w-full w-auto bg-black grid grid-cols-1 place-items-center md:grid md:grid-cols-3 md:gap-y-6 gap-y-4 font-[family-name:var(--font-geist-sans)]">
        {typeScriptProjects.map((Project, id) => (
          <div
            key={id}
            className="h-44 w-72 bg-[#fdc600] rounded-xl md:h-[250px] md:w-[350px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-white text-center text-2xl pt-3 font-bold md:text-4xl md:mt-5">
              {Project.name}
            </h2>
            <br />
            <p className="mx-3 text-base md:text-lg text-black">
              {Project.text}
            </p>
            <br />
            <div className="text-center md:mt-8 hover:scale-110 transition-all">
              <Link
                href={Project.link}
                className="bg-red-500 text-white text-sm rounded-lg p-2.5 md:p-3"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black">
        <p
          className="bg-black text-white text-center text-lg p-6 font-bold md:text-3xl md:pb-5 md:pt-14"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          HTML, CSS, TYPESCRIPT Projects
        </p>
      </div>
      <div className="md:h-auto h-auto md:w-full w-auto pb-14 bg-black grid grid-cols-1 place-items-center md:grid md:grid-cols-3 md:gap-y-6 gap-y-4 font-[family-name:var(--font-geist-sans)]">
        {htmlCssTsProjects.map((Project, id) => (
          <div
            key={id}
            className="h-44 w-72 bg-[#fdc600] rounded-xl md:h-[250px] md:w-[350px]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="text-white text-center text-3xl pt-3 font-bold md:text-4xl md:mt-5">
              {Project.name}
            </h2>
            <br />
            <p className="mx-3 md:text-lg text-center font-bold text-black">
              {Project.text}
            </p>
            <br />
            <div className="text-center mt-5 md:mt-14 hover:scale-110 transition-all">
              <Link
                href={Project.link}
                className="bg-red-500 text-white text-sm rounded-lg p-2.5 md:p-3"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
