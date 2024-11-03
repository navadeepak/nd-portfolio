import React from "react";
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
import { MdOutlineNetworkPing } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrSystem } from "react-icons/gr";
import { RiCodeSSlashLine } from "react-icons/ri";
import { TbBrandJavascript, TbPrompt } from "react-icons/tb";
import { SiMongodb, SiMui, SiPrimereact, SiGnubash } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const skillGroups = [
  {
    title: "Skills",
    titleIcon: <MdOutlineNetworkPing />,
    items: [
      { Icon: FaReact, name: "React" },
      { Icon: RiTailwindCssFill, name: "Tailwind CSS" },
      { Icon: FaHtml5, name: "HTML5" },
      { Icon: FaCss3Alt, name: "CSS3" },
      { Icon: TbBrandJavascript, name: "JavaScript" },
      { Icon: SiMongodb, name: "MongoDB" },
      { Icon: FaNode, name: "Node.js" },
    ],
  },
  {
    title: "Tools",
    titleIcon: <TbTools />,
    items: [
      { Icon: VscVscode, name: "VS Code" },
      { Icon: FaGitAlt, name: "Git" },
      { Icon: FaGithub, name: "GitHub" },
      { Icon: IoLogoVercel, name: "Vercel" },
      { Icon: SiMui, name: "Material-UI" },
      { Icon: SiPrimereact, name: "PrimeReact" },
    ],
  },

  {
    title: "Scripts",
    titleIcon: <RiCodeSSlashLine />,
    items: [
      { Icon: TbPrompt, name: "Command Prompt" },
      { Icon: SiGnubash, name: "Bash" },
    ],
  },
  {
    title: "Operating Systems",
    titleIcon: <GrSystem />,
    items: [
      { Icon: FaWindows, name: "Windows" },
      { Icon: FaLinux, name: "Linux" },
    ],
  },
];

const SkillItem = ({ Icon, name }) => (
  <div className="flex flex-row items-center justify-center relative">
    <div className="absolute w-full h-[50px] border-4 border-[--green-color] bg-white rounded-full left-0 z-10"></div>
    <div className="text-[--green-color] bg-white w-16 h-16 p-2 rounded-full z-20 flex items-center justify-center">
      <Icon className="w-8 h-8" />
    </div>
    <p className="text-black text-nowrap z-20 p-2 mr-2 font-semibold">{name}</p>
  </div>
);

const SkillGroup = ({ title, titleIcon, items }) => (
  <div className="flex flex-col p-5 max-sm:py-5 w-full">
    <p className="text-xl flex flex-row items-center font-bold mb-4 gap-5 bg-[--green-color] w-fit px-5 py-2 rounded-full">
      {titleIcon}
      {title}
    </p>
    <div className="flex flex-wrap items-center gap-5  w-full p-10 rounded-full max-sm:p-1">
      <div className="flex flex-row gap-5  bg-zinc-300 bg-opacity-30 rounded-full max-sm:rounded-lg p-5 w-fit max-2xl:overflow-scroll">
        {items.map(({ Icon, name }) => (
          <SkillItem key={name} Icon={Icon} name={name} />
        ))}
      </div>
    </div>
  </div>
);

function Skill() {
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
        <button
          onClick={() => navigate("/skillexplore")}
          className="bg-[--green-color] text-white rounded-full text-center group hover:w-[150px] w-[50px] text-nowrap justify-center items-center duration-300"
        >
          <p className="group-hover:flex hidden w-full h-8 items-center justify-center">
            Explore More
          </p>
          <BsArrowRightShort className="group-hover:hidden flex w-full h-8 items-center justify-center text-center" />
        </button>
      </div>
      <div className="p-5 max-sm:p-1 flex flex-col max-sm:gap-10 items-center justify-between max-h-[79vh] overflow-scroll w-full border-2 border-zinc-500 rounded-lg">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
