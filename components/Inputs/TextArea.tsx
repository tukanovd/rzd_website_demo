import BaseInput, { BaseInput as BaseInputType } from "./BaseInput";
import { getStyles } from "./utils";
import c from "classnames";
import { defaultClasses } from "./constants";

interface TextArea extends Omit<BaseInputType, "size"> {
  underline?: boolean;
}
const extraSize = "h-20";

const TextArea = ({ underline, ...props }: TextArea) => {
  const inputStyle = c(
    defaultClasses,
    getStyles({ underline: underline }),
    extraSize
  );
  const subtitleStyle = "color-secondary";

  return (
    <BaseInput
      tag="textarea"
      inputStyle={inputStyle}
      subtitleStyle={subtitleStyle}
      {...props}
    />
  );
};

export default TextArea;
