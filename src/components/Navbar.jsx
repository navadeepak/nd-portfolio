import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { BrowserRouter as Router } from "react-router-dom";

// images
import avatar from "../assets/avatar.webp";

// icons
import { IoMenu } from "react-icons/io5";
import { MdOutlineNetworkPing } from "react-icons/md";
import { BsPersonUp } from "react-icons/bs";
import { TbGeometry } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";
import { PiPhoneDisconnect } from "react-icons/pi";

// MUI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDialog = () => {
    setOpen(!open);
  };

  const sideBarData = [
    { icon: TbListDetails, title: "About", to: "/" },
    { icon: TbGeometry, title: "Project", to: "/project" },
    { icon: MdOutlineNetworkPing, title: "Skill", to: "/skill" },
    { icon: BsPersonUp, title: "Experiences", to: "/experiences" },
    { icon: PiPhoneDisconnect, title: "Contact", to: "/contact" },
  ];

  // side bar

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="flex w-full items-center flex-col py-10 gap-10">
        <p className="font-semibold text-black text-xl">MENU</p>
        <div className="h-full flex flex-col gap-5">
          {sideBarData.map((data, key) => {
            const IconComponent = data.icon;
            return (
              <Link
                to={data.to}
                key={key}
                className="flex items-center gap-3 hover:bg-[#4ade80] p-2 cursor-pointer  rounded-full duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleDialog();
                  window.history.pushState(null, '', data.to);
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }}
              >
                <div className="rounded-full shadow-[0_0_5px_0] shadow-zinc-400 p-2 flex items-center justify-center bg-white">
                  <IconComponent />
                </div>
                <p className="flex-1">{data.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </Box>
  );
  return (
    <Router>
      <div className="w-full h-[8vh] bg-zinc-200 flex items-center justify-between p-5 sticky top-0">
        <IoMenu className="w-6 h-6 cursor-pointer" onClick={handleDialog} />
        <div className="flex flex-row items-center justify-between gap-5">
          <Avatar
            src={avatar}
            className="rounded-full shadow-[0_0_5px_0] shadow-zinc-400"
          />
          <p className="text-2xl font-medium">Navadeepak</p>
        </div>
        <Drawer open={open} onClose={handleDialog}>
          {DrawerList}
        </Drawer>
      </div>
    </Router>
  );
}
