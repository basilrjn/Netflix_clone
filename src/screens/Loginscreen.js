import React, { useState } from "react";
import "./Loginscreen.css";
import SignInScreen from "./SignInScreen";

const Loginscreen = () => {
  const [signIn, setsignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          }
          alt="img"
        />
        <button onClick={() => setsignIn(true)} className="Buttonsignin">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited filims, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter yout email to cerate ot restart your
              membership.
            </h3>
            <div className="Logininput">
              <form>
                <input type="email" placeholder="Email" className="email" />
                <button onClick={() => setsignIn(true)} className="Getstarted">
                  Getstarted
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Loginscreen;
