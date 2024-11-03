import React, { useState } from "react";
import AboutFirst from "./AboutFirst";
import AboutSecond from "./AboutSecond";
import { BsArrowRightShort } from "react-icons/bs";

function About() {
  const [contentChange, setContentChange] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${contentChange ? "hidden" : "block"}`}>
        <AboutFirst />
      </div>
      <div className={`${contentChange ? "block" : "hidden"}`}>
        <AboutSecond />
      </div>
      <button
        className="flex flex-row max-lg:fixed max-lg:bottom-5 items-center justify-center gap-5 bg-white hover:bg-[#4ade80] duration-200 text-black rounded-full group"
        onClick={() => setContentChange(!contentChange)}
      >
        <BsArrowRightShort
          className={`rounded-full w-[30px] bg-white h-[30px] transform transition-transform duration-300 ease-in-out ${
            contentChange
              ? "rotate-180 border-l shadow-[-3px_0_5px_0] shadow-zinc-300 group-hover:shadow-none"
              : "rotate-0 shadow-[3px_0_5px_0] shadow-zinc-300 border-r group-hover:shadow-none"
          }`}
        />
        <p className="px-2 font-medium text-[#4ade80] group-hover:text-white">{contentChange ? "Back" : "More"}</p>
      </button>
    </div>
  );
}

export default About;
