"use client";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { GrTextAlignRight } from "react-icons/gr";


const Navigation = () => {
  const [Navopen, setNavopen] = useState(false);

  const handleNav = () => {
    setNavopen(!Navopen);
  };

  return (
    <nav className="w-full h-24 shadow-xl bg-black font-[family-name:var(--font-geist-sans)] z-20">
      <div className="flex justify-between items-center h-full w-full">
        <Image
          src="/mylogo.jpg"
          alt="logo"
          height={0}
          width={80}
          className="md:pl-1 md:w-[99px]"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        
        <div className="hidden md:flex" data-aos="fade-down" data-aos-duration="1000">
          <ul className="hidden md:flex text-white md:gap-8">
            <Link href="/">
              <li className="border-2 border-white p-2 px-3 rounded-xl md:px-4 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
                Home
              </li>
            </Link>
            <Link href="#About">
              <li className="border-2 border-white p-2 px-3 rounded-xl md:px-4 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
                About
              </li>
            </Link>
            <Link href="#Skills">
              <li className="border-2 border-white p-2 px-3.5 rounded-xl md:px-5 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
                Skills
              </li>
            </Link>
            <Link href="#Projects">
              <li className="border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
                Projects
              </li>
            </Link>
            <Link href="#Contact">
              <li className="border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer pl-24 mr-2 text-white flex flex-col items-center font-bold"
        >
          <GrTextAlignRight size={30} data-aos="fade-left" data-aos-duration="1000"/>
          <span data-aos="fade-left" data-aos-duration="1000">Menu</span>
        </div>
        <div className="text-white md:flex gap-5 mr-4 hidden" data-aos="fade-left" data-aos-duration="1000">
            <Link href={'https://www.linkedin.com/in/zubair-riaz-3452352ba/'}> <FaLinkedin size={30}/> </Link>
            <Link href={'https://github.com/ZubairrRiaz'}> <BsGithub size={30}/> </Link>
            <Link href={'https://www.instagram.com/zubairrajpoot907/'}> <RiInstagramFill size={30}/> </Link>
            <Link href={'#Email'}> <MdEmail size={30}/> </Link>
        </div>
      </div>
      <div
        className={
          Navopen
            ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-black p-10 ease-in duration-500 z-50"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-50"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer text-white">
            <RxCross2 size={30} />
          </div>
        </div>

        <div className="text-white text-center">
          <ul>
            <Link href="/">
              <li
                className="m-4 border-2 border-white p-2 rounded-xl md:px-4 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all"
                onClick={() => setNavopen(false)}
              >
                Home
              </li>
            </Link>
            <Link href="#About">
              <li
                className="m-4 border-2 border-white p-2 rounded-xl md:px-4 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all"
                onClick={() => setNavopen(false)}
              >
                About
              </li>
            </Link>
            <Link href="#Skills">
              <li
                className="m-4 border-2 border-white p-2 rounded-xl md:px-5 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all"
                onClick={() => setNavopen(false)}
              >
                Skills
              </li>
            </Link>
            <Link href="#Projects">
              <li
                className="m-4 border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all"
                onClick={() => setNavopen(false)}
              >
                Projects
              </li>
            </Link>
            <Link href="#Contact">
              <li
                className="m-4 border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all"
                onClick={() => setNavopen(false)}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="text-white justify-center pt-8 flex gap-5">
            <Link href={'https://www.linkedin.com/in/zubair-riaz-3452352ba/'}> <FaLinkedin size={30}/> </Link>
            <Link href={'https://github.com/ZubairrRiaz'}> <BsGithub size={30}/> </Link>
            <Link href={'https://www.instagram.com/zubairrajpoot907/'}> <RiInstagramFill size={30}/> </Link>
            <Link href={'#Email'}> <MdEmail size={30}/> </Link>
        </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;

{
  /* <ul className="flex justify-end content-center gap-2 bg-black p-4 text-white text-xs md:gap-8 md:text-lg pt-7 sm:flex">
          <li className="border-2 border-white p-2 px-3 rounded-xl md:px-4 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="border-2 border-white p-2 px-3.5 rounded-xl md:px-5 hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="#Skills">Skills</Link>
          </li>
          <li className="border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="#Projects">Projects</Link>
          </li>
          <li className="border-2 border-white p-2 rounded-xl hover:bg-[#fdc500] hover:border-[#fdc500] hover:scale-110 transition-all">
            <Link href="">Contact</Link>
          </li>
        </ul> */
}
