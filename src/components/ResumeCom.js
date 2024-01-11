import React from "react";
import ImageComponent from "./ImageComponent";

function ResumeCom({ src }) {
  return (
    <div className="res-card">
      <div>
        <ImageComponent src={src} className="re-card-img" />
      </div>
      <div className="res-content-com">
        <p>Lorem Ipsum</p>
        <span>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, orrandomised words which don't look even slightly
        </span>
      </div>
    </div>
  );
}

export default ResumeCom;
