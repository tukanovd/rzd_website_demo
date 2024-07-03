import { ReactNode } from "react";
import { default as NextLink } from "next/link";
import c from "classnames";

enum LinkVariants {
  "primary" = "primary",
  "secondary" = "secondary",
  "black" = "black",
  "white" = "white",
}

type LinkVariantsType = keyof typeof LinkVariants;

type LinkProps = {
  src: string;
  children: ReactNode;
  variant?: LinkVariantsType;
  className?: string;
};

const httpRegEx = /https?:\/\//g;

const checkIsInternal = (src: string) => {
  const regx = new RegExp(httpRegEx);
  return !regx.test(src);
};

const getLinkStyle = (variant: LinkVariantsType) => {
  switch (variant) {
    case LinkVariants.secondary: {
      return "color-secondary";
    }
    case LinkVariants.black: {
      return "color-primary-black";
    }
    case LinkVariants.white: {
      return "color-primary-white";
    }
    default:
      return "color-primary";
  }
};

const Link = ({
  src,
  children,
  variant = LinkVariants.primary,
  className,
}: LinkProps) => {
  const isInternalLink = checkIsInternal(src);

  const linkStyle = c("hover:underline", className, getLinkStyle(variant));

  if (isInternalLink) {
    return (
      <NextLink href={src} className={linkStyle}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkStyle} href={src}>
      {children}
    </a>
  );
};

export default Link;
