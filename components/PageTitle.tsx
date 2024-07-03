import { Typography } from "./Typography";
import { TypographyVariant } from "./Typography/types";
import { LayoutRow } from "./Layout";
import c from "classnames";

type PageTitleProps = {
  text: string;
  className?: string;
  variant?: TypographyVariant;
};

const PageTitle = ({ text, variant = "h1", className }: PageTitleProps) => {
  return (
    <LayoutRow colSpan="full" className={c("pb-10 pt-8", className)}>
      <Typography variant={variant} className="color-primary-black">
        {text}
      </Typography>
    </LayoutRow>
  );
};

export default PageTitle;
