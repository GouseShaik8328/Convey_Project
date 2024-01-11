import React from "react";
import {
  AMZICON,
  DELICON,
  HPICON,
  HYICON,
  IBMICON,
  INFICON,
  INTICON,
} from "../../assets";
import ButtonComponent from "../../components/ButtonComponent";
import ImageComponent from "../../components/ImageComponent";
import InputComponent from "../../components/InputComponent";

function NavBar() {
  return (
    <div className="nav-main">
      <div className="nav-bg-img">
        <ul className="nav-ul">
          <li>HOME</li>
          <li>OPTCPTJOBS</li>
          <li>TRAINING / SUPPORT</li>
          <li>SPONSORSHIP</li>
          <li>VISA TRACKER</li>
          <li>ABROAS STUDY</li>
          <li>RESUME SEARCH</li>
          <li>FORUM</li>
          <li>BLOG</li>
        </ul>
        <div className="container-box">
          <div className="nav-sub ">
            <div className="nav-sub-container">
              <div className="nav-conetent">
                <p>Over 10,000+ jobs are waiting for you</p>
                <span>what are you looking for you?</span>
              </div>

              <div className="nav-input-box">
                <InputComponent
                  placeHolder={"what are you looking for ?"}
                  className="nav-input"
                />
                <InputComponent
                  placeHolder={"select location"}
                  className="nav-input"
                  isSelect={true}
                />
                <ButtonComponent text="SEARCH" className="nav-search" />
              </div>
            </div>
            <div className="nav-side-img"></div>
          </div>
          <div className="nav-com-log">
            <ImageComponent src={HYICON} />
            <ImageComponent src={HYICON} />
            <ImageComponent src={HPICON} />
            <ImageComponent src={INFICON} />
            <ImageComponent src={AMZICON} />
            <ImageComponent src={INTICON} />
            <ImageComponent src={DELICON} />
            <ImageComponent src={IBMICON} />
            <ImageComponent src={IBMICON} />
            <ImageComponent src={DELICON} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
