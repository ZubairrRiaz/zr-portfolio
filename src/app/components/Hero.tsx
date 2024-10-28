"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <div
        className="h-[800px] md:bg-fixed md:h-[900px] w-full font-[family-name:var(--font-geist-sans)] bg-no-repeat md:bg-no-repeat bg-cover md:bg-cover flex flex-col items-center md:flex-none md:flex-row md:justify-evenly"
        style={{ backgroundImage: "url(/bgimage.jpg)" }}
      >
        <div>
          <Image
            src="/mypic.jpg"
            alt="My Pic"
            height={600}
            width={600}
            className="md:rounded-3xl md:h-[600px] md:w-[600px] h-[350px] w-[350px] rounded-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="text-center md:h-64 md:w-[660px] md:text-center md:mb-40 pt-8"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 className="text-[#fdc500] text-3xl font-extrabold md:text-6xl">
            Hi i'm
            <Typewriter
              options={{
                strings: [
                  "Zubair Riaz",
                  "Front-End Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-[#faedcd] text-base mx-5 pt-6 md:text-2xl md:text-justify md:leading-10 md:border-white rounded-xl text-justify">
          I’m a passionate front-end developer with expertise in <b>Next.js, Tailwind CSS, and TypeScript.</b>  My focus is on creating fast, responsive, and visually appealing web applications that provide seamless user experiences. My portfolio showcases projects where I’ve applied modern, scalable front-end technologies to build dynamic interfaces.

          </p>
          <Link href='#Email'>
          <button className="bg-red-600 h-9 px-2 font-semibold text-base text-white rounded mt-10 md:h-12 md:px-2 md:text-xl md:mt-12 hover:scale-110 transition-all">
            Let's Connect
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
