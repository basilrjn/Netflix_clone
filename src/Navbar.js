import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`Nav ${show && "Navback"}`}>
      <div className="Navcon">
        <img
          className="logo"
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          }
          alt=""
        />

        <img
          className="avatar"
          src={
            "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
