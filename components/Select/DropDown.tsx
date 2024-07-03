import { useCallback } from "react";
import c from "classnames";
import BaseInput from "../Inputs/BaseInput";
import { getStyles } from "../Inputs/utils";
import { ChevronDown, ChevronUp } from "../Icons";

export interface DropDown {
  value: string;
  onClick: () => void;
  onChange: (value: string) => void;
  isOpen: boolean;
}

const DropDown = ({ value, onChange, onClick, isOpen }: DropDown) => {
  const wrapperStyle = c("w-full h-full flex justify-between", getStyles({}));
  const inputStyle = c(
    "color-primary-black-important cursor-pointer bg-color-primary-white rounded-border-radius_medium"
  );

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  return (
    <div className={wrapperStyle} onClick={handleClick}>
      <BaseInput
        value={value}
        onChange={onChange}
        inputStyle={inputStyle}
        disabled
      />
      <Chevron />
    </div>
  );
};

export default DropDown;
