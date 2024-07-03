import BaseInput, { BaseInput as BaseInputType } from "./BaseInput";
import { getStyles } from "./utils";
import c from "classnames";
import { defaultClasses } from "./constants";
import Password from "./Password";

interface StyledInput extends BaseInputType {
  isError?: boolean;
  isSuccess?: boolean;
  underline?: boolean;
}

const StyledInput = ({
  isError,
  isSuccess,
  underline,
  inputStyle,
  ...props
}: StyledInput) => {
  const { type } = props;
  const _inputStyle = c(
    inputStyle,
    defaultClasses,
    getStyles({ isError, isSuccess, underline: underline })
  );
  const subtitleStyle = c({
    "color-primaryHover": isError,
    "color-success": isSuccess,
    "color-secondary": !isSuccess,
  });

  if (type === "password") {
    return (
      <Password
        passwordStyle={_inputStyle}
        subtitleStyle={subtitleStyle}
        {...props}
      />
    );
  }

  return (
    <BaseInput
      {...props}
      inputStyle={_inputStyle}
      subtitleStyle={subtitleStyle}
    />
  );
};

export default StyledInput;
