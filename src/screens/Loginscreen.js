import React from "react";
import "./Loginscreen.css";

const Loginscreen = () => {
  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          }
        />
        <button className="Buttonsignin">Sign In</button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        <>
          <h1>Unlimited filims, TV programmes and more.</h1>
        </>
      </div>
    </div>
  );
};

export default Loginscreen;
