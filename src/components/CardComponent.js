import React from "react";
import ImageComponent from "./ImageComponent";

function CardComponent({ img }) {
  return (
    <div className="card-main">
      <ImageComponent src={img} className="card-img" />
      <div className="card-content">
        <div>
          <span>{"20th February, 2023"}</span>
          <span>{"5 min read"}</span>
        </div>
        <p className="card-p">
          <span>Promodex</span> : Favicon - Elevating Your Website with a Small
          But Mighty Label it is a long established fact. then the website
          improves.
        </p>
        <p>Read More &gt;</p>
      </div>
    </div>
  );
}

export default CardComponent;
