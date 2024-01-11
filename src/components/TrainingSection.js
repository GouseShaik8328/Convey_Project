import React from "react";
import ButtonComponent from "./ButtonComponent";

function TrainingSection({ heading, sub1, sub2 }) {
  return (
    <div className="tri-main">
      <div className="tri-content">
        <p>{heading}</p>
        <div className="tri-content-sub">
          <span>{sub1}</span>
          <span>{sub2}</span>
        </div>
      </div>
      <div>
        <ButtonComponent text="Apply" className="tri-btn" />
      </div>
    </div>
  );
}

export default TrainingSection;
