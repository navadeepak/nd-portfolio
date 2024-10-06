import React from "react";
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
    <p className="text-black z-20 p-2 mr-2 font-semibold">{name}</p>
  </div>
);

const SkillGroup = ({ title, titleIcon, items }) => (
  <div>
    <p className="text-xl flex flex-row items-center justify-center font-bold mb-4 gap-5">
      {titleIcon}
      {title}
    </p>
    <div className="flex flex-wrap items-center gap-5 mb-8 bg-zinc-300 p-5 rounded-full bg-opacity-30">
      {items.map(({ Icon, name }) => (
        <SkillItem key={name} Icon={Icon} name={name} />
      ))}
    </div>
  </div>
);

function Skill() {
  return (
    <div className="p-5 flex flex-col items-center justify-between gap-20">
      {skillGroups.map((group) => (
        <SkillGroup key={group.title} {...group} />
      ))}
    </div>
  );
}

export default Skill;
