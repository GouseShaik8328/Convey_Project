import React from "react";
import { AD1, AD2, AD3 } from "../../assets";
import ImageComponent from "../../components/ImageComponent";
import TrainingSectionComponent from "./TrainingSectionComponent";

function TrainingComponent() {
  return (
    <div className="container-box">
      <div className="grid-container">
        <div className="grid-item">
          <TrainingSectionComponent heading="Recent Trainings" />
          <TrainingSectionComponent heading="Empanelment & Sponsorship" />
          <TrainingSectionComponent heading="Project Support Enquiries " />
        </div>
        <div className="grid-item">
          <TrainingSectionComponent heading="OPT - CPT Hiring" />
          <TrainingSectionComponent heading="Training Enquiries" />
          <TrainingSectionComponent heading="Legal & Attorney Queries" />
        </div>
        <div className="grid-item ad-img">
          <ImageComponent src={AD1} />
          <ImageComponent src={AD2} />
          <ImageComponent src={AD3} />
          <ImageComponent src={AD2} />
          <ImageComponent src={AD2} />
          <ImageComponent src={AD2} />
          <ImageComponent src={AD2} />
        </div>
      </div>
    </div>
  );
}

export default TrainingComponent;
