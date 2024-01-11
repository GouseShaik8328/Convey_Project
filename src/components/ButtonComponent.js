import React from "react";

function ButtonComponent({
  text = "",
  onClickHandler = () => {},
  className = "",
  ...rest
}) {
  return (
    <div>
      <button className={`btn ${className}`} onClick={onClickHandler} {...rest}>
        {text}
      </button>
    </div>
  );
}

export default ButtonComponent;
