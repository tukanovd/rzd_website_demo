import c from "classnames";

type getStylesType = {
  isError?: boolean;
  isSuccess?: boolean;
  underline?: boolean;
};

export const getStyles = ({ isError, isSuccess, underline }: getStylesType) => {
  const defaultStyles = "outline-darkBlue-300";
  const isDefault = !isError && !isSuccess;

  return c(defaultStyles, {
    "outline-primaryHover border-primaryHover": isError,
    "outline-success border-success color-success": isSuccess,
    "focus:outline-none border-b": underline,
    "outline-1 rounded-border-radius_medium border-width_base": !underline,
    "border-common": isDefault,
  });
};
