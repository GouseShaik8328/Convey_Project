import React from "react";

function ImageComponent({ src, className = "", alt = "" }) {
  return (
    <div>
      <img src={src} className={className} alt={alt ? alt : src} />
    </div>
  );
}

export default ImageComponent;
