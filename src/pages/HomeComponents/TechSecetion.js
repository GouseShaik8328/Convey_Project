import React from "react";
import { TECHIMG } from "../../assets";
import ImageComponent from "../../components/ImageComponent";

function TechSecetion() {
  return (
    <div className="container-box tech-main">
      <ImageComponent src={TECHIMG} />
    </div>
  );
}

export default TechSecetion;
