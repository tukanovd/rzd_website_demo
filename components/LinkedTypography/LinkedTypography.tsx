import React from "react";
import {
  typographyClasses as classes,
  typographyVariantMapping,
  typographyVariants as variants,
} from "../Typography";
import c from "classnames";
import { OverridableComponent, TypographyTypeMap } from "../Typography/types";
import { extractLinks } from "@utils/auxiliary";
import Link from "../Link";

const LinkedTypography = React.forwardRef(function LinkedTypography(
  props,
  ref
) {
  const {
    className,
    component,
    isParagraph = false,
    variant = variants["p1"],
    children,
    ...other
  } = props;

  const Component =
    component ||
    (isParagraph ? "p" : typographyVariantMapping[variant]) ||
    "span";

  if (typeof children === "string") {
    const links = extractLinks(children);

    if (links.length > 0) {
      let unHandledTextPart = children;
      let renderedParts = [];

      links.forEach((link) => {
        const linkStartIndex = unHandledTextPart.indexOf(link.body); // Определяем, с какого места начинается ссылка в тексте
        const unlinkedTextPart = unHandledTextPart.substring(0, linkStartIndex); // Текст до ссылки
        const cuttedPart = unlinkedTextPart + link.body; // Текст + ссылка, чтобы вырезать из всего текста
        unHandledTextPart = unHandledTextPart.substring(cuttedPart.length); // Оставшийся необработанный текст

        renderedParts.push(unlinkedTextPart);
        renderedParts.push(<Link src={link.url}>{link.label}</Link>);
      });

      renderedParts.push(unHandledTextPart);

      return (
        <Component
          ref={ref}
          className={c(classes[variant], className)}
          {...other}
        >
          {renderedParts}
        </Component>
      );
    }
  }

  return (
    <Component ref={ref} className={c(classes[variant], className)} {...other}>
      {children}
    </Component>
  );
}) as OverridableComponent<TypographyTypeMap>;

export default LinkedTypography;
