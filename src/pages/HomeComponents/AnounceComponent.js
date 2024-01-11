import React from "react";
import { AN1IMG, AN2IMG } from "../../assets";
import ImageComponent from "../../components/ImageComponent";

function AnounceComponent() {
  return (
    <div className="an-main">
      <div className="an-cards">
        <ImageComponent src={AN1IMG} />
      </div>
      <div className="an-cards">
        <ImageComponent src={AN2IMG} />
      </div>
    </div>
  );
}

export default AnounceComponent;
