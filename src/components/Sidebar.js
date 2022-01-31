import React from "react";
import "../css/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import SidebarOption from "./SidebarOption.js";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core";
import { BookmarkBorder, ListAlt, PermIdentity } from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* {Twitter icon} */}
      <TwitterIcon />

      {/* SidbarOption */}
      <SidebarOption active text={"Home"} Icon={HomeIcon} />

      {/* SidbarOption */}
      <SidebarOption Icon={SearchIcon} text={"Explore"} />

      {/* SidbarOption */}
      <SidebarOption Icon={NotificationsNoneIcon} text={"Notifications"} />
      {/* SidbarOption */}
      <SidebarOption Icon={MailOutlineIcon} text={"Message"} />
      <SidebarOption Icon={BookmarkBorderIcon} text={"Bookmarks"} />
      <SidebarOption Icon={ListAltIcon} text={"Lists"} />
      <SidebarOption Icon={PermIdentityIcon} text={"Profile"} />
      <SidebarOption Icon={MoreHorizIcon} text={"More"} />

      {/* Button */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
