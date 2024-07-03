import { useCallback, useState } from "react";
import c from "classnames";
import BaseInput, { BaseInput as BaseInputType } from "./BaseInput";
import InlineImage from "../Image/InlineImage";
import Subtitle from "./Subtitle";
import { Size, getSizeClass } from "@utils";
import { iconClosedSrc, iconOpenedSrc } from "./constants";

interface PasswordInput extends BaseInputType {
  passwordStyle?: string;
}

const Password = ({
  passwordStyle,
  subtitleStyle,
  subtitle,
  ...props
}: PasswordInput) => {
  const { size = Size.m } = props;
  const [isShowPass, setIsShowPass] = useState(false);
  const sizeClasses = getSizeClass(size);
  const style = c(passwordStyle, sizeClasses);
  const toggleShowPass = useCallback(() => {
    setIsShowPass((prevState) => !prevState);
  }, []);
  const iconSrc = isShowPass ? iconOpenedSrc : iconClosedSrc;
  const inputType = isShowPass ? "text" : "password";

  return (
    <div>
      <div className={style}>
        <div className="flex items-center h-full">
          <BaseInput
            {...props}
            type={inputType}
            inputStyle="outline-0 w-full"
            size={Size.s}
          />
          <span className="ml-auto cursor-pointer" onClick={toggleShowPass}>
            <InlineImage src={iconSrc} height={28} width={28} />
          </span>
        </div>
      </div>
      <Subtitle subtitleStyle={subtitleStyle} text={subtitle} />
    </div>
  );
};

export default Password;
