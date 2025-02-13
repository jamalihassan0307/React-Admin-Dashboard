import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { SidebarData } from "../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const handleMenuClick = (item, index) => {
    setSelected(index);
    const path = item.heading.toLowerCase();
    navigate(`/${path}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        animate={{
          width: expanded ? "15rem" : "3rem",
        }}
      >
        <div className="logo">
          <span>Sh</span>
          <span>ops</span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => handleMenuClick(item, index)}
              >
                <item.icon />
                <span>{expanded && item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem" onClick={handleLogout}>
            <UilSignOutAlt />
            {expanded && <span>Logout</span>}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
