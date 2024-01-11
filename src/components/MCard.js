import React from "react";

function MCard({ src, time, heading, sub, location, experiance, ...rest }) {
  return (
    <div className="m-card" {...rest}>
      <div className="m-card1">
        <p>{heading}</p>
        <p>{sub}</p>
        <p>{location}</p>
        <p>{experiance}</p>
      </div>
      <div className="m-card2">
        <p>{time}</p>
        <img src={src} />
      </div>
    </div>
  );
}

export default MCard;
