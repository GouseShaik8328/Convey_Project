import React from "react";
import { IoIosArrowDown } from "react-icons/io";
function InputComponent({
  placeHolder,
  onChangeHandler,
  className,
  isSelect = false,
  ...rest
}) {
  return (
    <div className="input">
      <input
        placeholder={placeHolder}
        onChange={onChangeHandler}
        {...rest}
        className={className}
      ></input>
      {isSelect ? (
        <IoIosArrowDown className="input-select-icon" size={15} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default InputComponent;
