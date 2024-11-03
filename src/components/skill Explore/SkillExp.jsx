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
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

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
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <FaReact
              className="w-40 h-40 animate-spin"
              style={{ animationDuration: "4s" }}
            />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">React JS</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              With a solid foundation in{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                React
              </span>{" "}
              and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                three months of hands-on experience
              </span>{" "}
              , I have honed my skills in{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                responsive
              </span>
              ,{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                dynamic
              </span>{" "}
              user interfaces. My experience includes working with{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                React components
              </span>
              ,{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                hooks
              </span>
              , and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                state management
              </span>
              , allowing me to build efficient and scalable applications. I am
              comfortable navigating through{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                handling events
              </span>
              , and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                optimizing performance
              </span>
              , making me well-prepared to tackle diverse front-end challenges.
            </p>
          </div>
        </section>
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <RiTailwindCssFill className="w-40 h-40" />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              With a{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                solid understanding of CSS
              </span>
              , particularly within the
              <span className=" font-semibold text-2xl text-[#4ade80]">
                Tailwind CSS
              </span>{" "}
              framework, I excel at creating{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                modern
              </span>
              ,{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                responsive
              </span>
              , and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                visually appealing
              </span>{" "}
              designs. Tailwind’s utility-first approach allows me to{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                efficiently style
              </span>{" "}
              components while maintaining a
              <span className=" font-semibold text-2xl text-[#4ade80]">
                clean
              </span>{" "}
              and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                scalable
              </span>{" "}
              code structure. I am proficient in using Tailwind’s extensive
              classes for layout, typography, and animations, enabling me to
              rapidly prototype and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                refine user interfaces
              </span>{" "}
              that enhance the overall{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                user experience
              </span>
              .
            </p>
          </div>
        </section>
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <FaGithub className="w-40 h-40" />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">Github</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              I also have experience using{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                GitHub
              </span>
              , which allows me to work{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                collaboratively
              </span>
              , manage{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                version control
              </span>
              , and contribute to projects{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                efficiently{" "}
              </span>
              . My familiarity with GitHub workflows, including{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                branching{" "}
              </span>
              ,{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                merging{" "}
              </span>
              , and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                resolving conflicts{" "}
              </span>
              , ensures smooth project collaboration and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                code management{" "}
              </span>
              . This experience is essential for maintaining a{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                well-organized{" "}
              </span>{" "}
              and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                dynamic{" "}
              </span>
              development process in{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                team environments{" "}
              </span>
              .
            </p>
          </div>
        </section>
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <FaNode className="w-40 h-40" />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">Node.js</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              With a{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                basic knowledge
              </span>{" "}
              of{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                Node.js
              </span>
              , I am familiar with{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                setting up
              </span>
              and managing{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                server-side
              </span>{" "}
              environments, and connecting to{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                databases
              </span>
              . I understand the core principles of{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                Node.js
              </span>{" "}
              and can create simple{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                APIs
              </span>{" "}
              to support
              <span className=" font-semibold text-2xl text-[#4ade80]">
                full-stack
              </span>{" "}
              applications, allowing me to work effectively across both{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                client
              </span>{" "}
              and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                server
              </span>{" "}
              sides of development.
            </p>
          </div>
        </section>
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <VscVscode className="w-40 h-40" />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">VS Code</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              Proficient in using{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                Visual Studio Code
              </span>
              , I leverage its powerful
              <span className=" font-semibold text-2xl text-[#4ade80]">
                features
              </span>
              ,{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                extensions
              </span>
              , and customization options to streamline my development workflow.
              From efficient code editing to integrated version control and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                debugging
              </span>
              , I utilize VS Code’s{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                tools
              </span>{" "}
              to enhance{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                productivity
              </span>{" "}
              and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                maintain clean
              </span>
              ,{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                organized
              </span>{" "}
              code. This proficiency allows me to work{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                effectively
              </span>{" "}
              across various projects with{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                speed
              </span>{" "}
              and{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                accuracy
              </span>
              .
            </p>
          </div>
        </section>
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <FaLinux className="w-40 h-40" />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">Linux</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              Proficient in{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                Linux
              </span>
              , I am{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                comfortable navigating the command line
              </span>
              ,
              <span className=" font-semibold text-2xl text-[#4ade80]">
                managing files
              </span>
              , and configuring environments to support development tasks. I
              leverage Linux for system administration, automation, and
              efficient{" "}
              <span className=" font-semibold text-2xl text-[#4ade80]">
                task management
              </span>
              , enhancing my
              <span className=" font-semibold text-2xl text-[#4ade80]">
                productivity
              </span>{" "}
              and ensuring stable, secure workflows across development projects.
            </p>
          </div>
        </section>
        <section className="flex flex-row max-lg:flex-col items-center justify-center p-5 gap-5 w-full h-[70vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
          <div className="flex flex-col gap-5 items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <IoLogoVercel className="w-40 h-40" />
            <p className=" font-semibold text-5xl max-sm:text-3xl text-[#4ade80]">Vercel</p>
          </div>
          <div className="flex flex-col items-center justify-center p-5 w-full h-[65vh] max-lg:h-fit bg-white rounded-lg bg-opacity-10">
            <p className="p-10">
              With a basic understanding of <span className=" font-semibold text-2xl text-[#4ade80]">Vercel</span>, I am familiar with <span className=" font-semibold text-2xl text-[#4ade80]">deploying web applications </span>
              and <span className=" font-semibold text-2xl text-[#4ade80]">managing hosting</span> environments. I know how to
              leverage Vercel’s features to ensure <span className=" font-semibold text-2xl text-[#4ade80]">smooth deployments</span> and
              <span className=" font-semibold text-2xl text-[#4ade80]">optimize performance</span> for web projects, making it easier to publish
              <span className=" font-semibold text-2xl text-[#4ade80]">updates</span> and maintain live applications <span className=" font-semibold text-2xl text-[#4ade80]">efficiently</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SkillExp;
