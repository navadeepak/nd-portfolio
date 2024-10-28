import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNode,
    FaGitAlt,
    FaGithub,
    FaWindows,
    FaLinux,
  } from "react-icons/fa";

function SkillExp() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-5 w-full">
      <div className="flex flex-row items-center justify-between gap-5 mb-5 w-full">
        <button
          onClick={() => navigate(-1)}
          className="bg-[--green-color] text-white rounded-full text-center group hover:w-[150px] w-[50px] text-nowrap justify-center items-center duration-300"
        >
          <p className="group-hover:flex hidden w-full h-8 items-center justify-center">
            Go Back
          </p>
          <BsArrowLeftShort className="group-hover:hidden flex w-full h-8 items-center justify-center text-center" />
        </button>
      </div>
      <div className="flex flex-col items-center p-5 w-full border-2 rounded-lg border-zinc-500 h-[79vh] gap-5 overflow-scroll">
        <section className="flex flex-row items-center justify-center p-5 gap-5 w-full h-[70vh] bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <FaReact className="w-40 h-40 animate-spin" style={{ animationDuration: '4s' }}/>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
        </section>
        <section className="flex flex-row items-center justify-center p-5 gap-5 w-full h-[70vh] bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
        </section>
        <section className="flex flex-row items-center justify-center p-5 gap-5 w-full h-[70vh] bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
        </section>
        <section className="flex flex-row items-center justify-center p-5 gap-5 w-full h-[70vh] bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
        </section>
        <section className="flex flex-row items-center justify-center p-5 gap-5 w-full h-[70vh] bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] bg-white rounded-lg bg-opacity-10">
            <img src={""} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default SkillExp;
