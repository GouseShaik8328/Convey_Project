import React from "react";
import { R1IMG, R2IMG, R3IMG } from "../../assets";
import ButtonComponent from "../../components/ButtonComponent";
import ResumeCom from "../../components/ResumeCom";

function ResumeComponent() {
  return (
    <div className="container-box">
      <div className="resume-heading">
        <div>
          <p>Top Resumes</p>
          <span>Who Are In Extremely Love With Eco Friendly System...</span>
        </div>
        <div>
          <ButtonComponent text="PREMIUM" className="res-button" />
        </div>
      </div>
      <div className="resume-cards-main">
        <div className="resume-cards">
          <ResumeCom src={R2IMG} />
          <ResumeCom src={R3IMG} />
          <ResumeCom src={R1IMG} />
        </div>
        <div className="resume-cards res-card2">
          <ResumeCom src={R2IMG} />
          <ResumeCom src={R3IMG} />
          <ResumeCom src={R1IMG} />
        </div>
      </div>
    </div>
  );
}

export default ResumeComponent;
