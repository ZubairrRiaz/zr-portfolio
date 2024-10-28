import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <div className="bg-black" id="About">
        <h1
          data-aos="flip-down"
          data-aos-duration="1000"
          className="text-center text-5xl py-3 md:text-6xl font-extrabold md:py-5 text-white"
        >
          <span className="text-[#fdc600]">About</span> Me
        </h1>
      </div>
      <div
        className="bg-black flex flex-col items-center pb-12 md:flex-row md:justify-center gap-3 md:gap-6 py-2 md:py-10"
        id="About"
      >
        {/* <Image src={"/zubair.jpg"} alt='MyPic' height={190} width={200} className='rounded-full md:rounded-2xl md:w-[400px] md:h-[350px]' data-aos="flip-down" data-aos-duration="1000"/> */}
        {/* <h1 className='text-white text-4xl font-semibold my-3 md:text-6xl md:-mx-8' data-aos="flip-down" data-aos-duration="1000">About Me:</h1> */}
        <div
          className="bg-black h-[400px] w-[350px] md:rounded-3xl rounded-2xl md:w-[600px] md:h-[550px] flex justify-center items-center md:my-1 border-2 border-white"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <ul className="text-[#faedcd] m-2 text-justify md:text-xl md:leading-10">
          
            

          Here’s what I bring to the table: <br />
<li><b>Next.js Expertise:</b> With a strong grasp of Next.js, I develop optimized, SEO-friendly web applications with SSR (Server-Side Rendering) and SSG (Static Site Generation) capabilities, ensuring efficient load times and scalability.</li>
<li><b>Tailwind CSS Proficiency:</b> My design approach emphasizes clean, maintainable, and responsive layouts. Using Tailwind CSS, I craft visually engaging UI components, quickly iterating to achieve pixel-perfect design.</li>
<li><b>TypeScript Skills:</b> Proficient in TypeScript, I bring a structured, type-safe approach to my code, enhancing reliability, maintainability, and scalability, and reducing potential bugs.</li>

          
          </ul>
          
        </div>

        <div
          className="bg-[#fdc600] h-[400px] w-[350px] md:rounded-3xl rounded-2xl md:w-[600px] md:h-[550px] flex justify-center items-center md:my-1"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <ul className="text-black m-2 text-center md:text-2xl md:leading-10 text-lg">
          <li><b>My Approach:</b>
I prioritize clean code, user-centered design, and performance optimization. By combining technical skills with creative problem-solving, I bring ideas to life in a way that's both visually appealing and highly functional.</li>

<li><b>Let's Connect! </b>
 Check out my work below, and feel free to reach out if you’re interested in collaborating or learning more about my projects.</li>

          </ul>
        </div>
      </div>
    </>
  );
};

// family-name:var(--font-geist-sans)

export default About;
