import React from "react";
import ButtonComponent from "../../components/ButtonComponent";
import TrainingSection from "../../components/TrainingSection";

function TrainingSectionComponent({ heading, data = [1, 2, 3, 4, 5, 6, 7] }) {
  return (
    <div className="tri-se-main">
      <div className="tri-se-head">
        <p>{heading}</p>
      </div>
      <div className="tri-se-content">
        {data.map((e) => {
          return (
            <div>
              <TrainingSection
                heading={"Android training demo @29th feb"}
                sub1="fee : $ 300"
                sub2={"duration : 30 hrs"}
              />
            </div>
          );
        })}{" "}
      </div>
      <div className="tri-se-btn">
        <ButtonComponent text="Viwe All" className="tri-su-btn" />
      </div>
    </div>
  );
}

export default TrainingSectionComponent;
