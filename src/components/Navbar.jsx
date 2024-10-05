import React from "react";
import Avatar from "@mui/material/Avatar";

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
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const sideBarData = [
    { icon: <TbGeometry />, title: "Project" },
    { icon: <MdOutlineNetworkPing />, title: "Skill" },
    { icon: <BsPersonUp />, title: "Experines" },
    { icon: <TbListDetails />, title: "About" },
    { icon: <PiPhoneDisconnect />, title: "Contact" },
  ];

  // side bar

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex w-full items-center flex-col py-10">
        <p className="font-semibold text-black text-xl">MENU</p>
        <List>
          {sideBarData.map((data, key) => (
            <div key={key} className="flex flex-row items-center gap-3 space-y-5">
              <p className="rounded-full shadow-[0_0_5px_0] shadow-zinc-400 p-2">{data.icon}</p>
              <p className="h-full">{data.title}</p>
            </div>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
  return (
    <div className="w-full h-[8vh] bg-zinc-200 flex items-center justify-between p-5">
      <IoMenu className="w-6 h-6 cursor-pointer" onClick={toggleDrawer(true)} />
      <div className="flex flex-row items-center justify-between gap-5">
        <Avatar
          src={avatar}
          className="rounded-full shadow-[0_0_5px_0] shadow-zinc-400"
        />
        <p className="text-2xl font-medium">Navadeepak</p>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
