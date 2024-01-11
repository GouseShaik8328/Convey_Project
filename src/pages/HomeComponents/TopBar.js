import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { LOGO } from "../../assets";
import ButtonComponent from "../../components/ButtonComponent";
import ImageComponent from "../../components/ImageComponent";

function TopBar() {
  return (
    <div className="container-box">
      <div className="home-top-bar">
        <div>
          <ImageComponent src={LOGO} className="logo-img" />
        </div>
        <div className="top-bar-btn">
          <ButtonComponent text="REGISTER" className="rg-btn" />
          <ButtonComponent text="LOGIN" className="rg-btn lg-btn" />
          <div>
            <FaUserCircle className="user-logo" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
