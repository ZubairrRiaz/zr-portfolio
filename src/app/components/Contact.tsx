"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form: any = useRef();

  const sendEmail = (e: unknown | any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5yvrd85", "template_l6f7xku", form.current, {
        publicKey: "ZU-RIn0MFOzKcjhE8",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error: any) => {
          alert(`FAILED...${error.text}`);
        }
      );
  };

  return (
    <div
      id="Contact"
      className="md:h-auto h-auto w-full bg-[#faedcd] font-[family-name:var(--font-geist-sans)] text-black"
    >
      <h1
        className="text-center md:text-5xl text-3xl font-extrabold py-9"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        Contact Information
      </h1>

      <div className="flex flex-col items-center gap-4 md:place-items-center md:flex-row md:flex-wrap md:justify-center">
        <iframe
          data-aos="flip-left"
          data-aos-duration="1000"
          className="rounded-lg md:h-[500px] md:w-[80%] w-[80%] h-[300px] flex justify-center items-end"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6711.285277296919!2d67.00578691252437!3d24.87854581130121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315f52cd498b7%3A0x3071a88093faec21!2sLyari%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1729950102583!5m2!1sen!2s"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>

        <div className="bg-black text-white rounded-lg md:h-[300px] md:w-[40%] h-[200px] w-[80%]">
          <ul
            className="md:mt-9 m-2 md:text-lg text-sm md:grid md:grid-rows-4 md:place-items-center md:gap-8 grid grid-rows-4 gap-6"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <li>WhatsApp No: 03082552823</li>
            <li>Contact No: 03082552823</li>
            <li>Address: Bihar, Colony Madina Park, Lyari</li>
            <li>Email: zubairrajpoot2164@gmail.com</li>
          </ul>
        </div>
        <div
          id="Email"
          data-aos="flip-left"
          data-aos-duration="1000"
          className="border text-black p-6 md:pl-14 rounded-2xl grid md:h-[500px] md:w-[45%] h-[430px] w-[80%] backdrop-blur-[40px] bg-white/20"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-2 md:space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-base md:text-xl">
                Name
              </label>
              <br />
              <input
                name="from_name"
                type="text"
                id="name"
                className="h-8 w-[98%] md:h-9 md:w-[90%] rounded-lg px-2 text-base md:text-lg"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-base md:text-xl">
                Subject
              </label>
              <br />
              <input
                name="from_name"
                type="text"
                id="subject"
                className="h-8 w-[98%] md:h-9 md:w-[90%] rounded-lg px-2 text-base md:text-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-base md:text-xl">
                Email
              </label>
              <br />
              <input
                name="from_email"
                type="text"
                id="email"
                className="h-8 w-[98%] md:h-9 md:w-[90%] rounded-lg px-2 text-base md:text-lg"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-base md:text-xl">
                Message
              </label>
              <br />
              <textarea
                name="message"
                id="message"
                className="h-24 w-[98%] md:h-28 md:w-[90%] rounded-lg px-2 text-base md:text-lg"
              ></textarea>
            </div>

            <div className="text-center bg-black text-white rounded-lg py-3 font-bold cursor-pointer md:w-[91%]">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
