import React from "react";
import bigimg from "../assets/Codetyping-amico.svg";

function AboutSecond() {
  return (
    <div className="h-[85vh] flex flex-row-reverse max-lg:flex-col items-center justify-center p-36 max-lg:p-5 max-lg:mt-[0vh] max-lg:justify-start">
      <div className="flex items-center justify-center h-full w-fit max-lg:opacity-10 max-lg:absolute ">
        <img src={bigimg} alt="Avatar" className="w-[500px] h-[500px]" />
      </div>
      <div className="flex items-center justify-center h-full w-full max-lg:justify-start">
        <p className=" text-xl max-sm:text-base text-center p-20 max-xl:p-2">
          {" "}
          I'm a{" "}
          <span className="text-3xl max-sm:text-xl text-[#4ade80]">
            Junior Full Stack Developer
          </span>{" "}
          at{" "}
          <span className="text-3xl max-sm:text-xl text-[#4ade80]">
            Quantum Sharq Innovative Solutions
          </span>
          , specializing in the{" "}
          <span className="text-3xl max-sm:text-xl text-[#4ade80]">MERN stack </span> with a
          focus on <span className="text-3xl max-sm:text-xl text-[#4ade80]">front-end</span>{" "}
          technologies. He excels in creating{" "}
          <span className="text-3xl max-sm:text-xl text-[#4ade80]">dynamic</span> and
          <span className="text-3xl max-sm:text-xl text-[#4ade80]"> responsive</span> web
          applications using HTML, CSS, and React, ensuring a seamless user
          experience across all devices. His expertise lies in crafting visually
          appealing interfaces and optimizing the user experience with{" "}
          <span className="text-3xl max-sm:text-xl text-[#4ade80]">Well-Structured</span> and{" "}
          <span className="text-3xl max-sm:text-xl text-[#4ade80]">Responsive designs </span>,
          while leveraging modern CSS techniques and frameworks.
        </p>
      </div>
    </div>
  );
}

export default AboutSecond;
