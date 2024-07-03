import * as React from "react";
import c from "classnames";

import {
  typographyClasses as classes,
  typographyVariants as variants,
  typographyVariantMapping,
} from "./constants";

import type { TypographyTypeMap, OverridableComponent } from "./types";

export type { TypographyProps, TypographyVariant } from "./types";

export const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    className,
    component,
    isParagraph = false,
    variant = variants["p1"],
    ...other
  } = props;
  const Component =
    component ||
    (isParagraph ? "p" : typographyVariantMapping[variant]) ||
    "span";

  return (
    <Component
      ref={ref}
      className={c(classes[variant], className)}
      {...other}
    />
  );
}) as OverridableComponent<TypographyTypeMap>;

export default Typography;
