import c from "classnames";
import type { ContactType } from "@model";
import { Typography } from "./Typography";
import type { TypographyVariant } from "./Typography/types";
import Link from "./Link";
import { getTextColor, TextColorType } from "@utils";

type ContactBlockProps = {
  text: string;
  link?: string;
  type: ContactType;
  variant?: TypographyVariant;
  withTitle?: boolean;
  textColor?: TextColorType;
};

const ContactBlock = ({
  text,
  type,
  variant = "h2",
  link = "/",
  withTitle = false,
  textColor,
}: ContactBlockProps) => {
  const _textColor = getTextColor(textColor);

  switch (type) {
    case "address":
      return (
        <div className="flex flex-col gap-2">
          {withTitle && (
            <Typography
              variant={variant}
              className={c(_textColor, { "color-secondary": !_textColor })}
            >
              Адрес
            </Typography>
          )}
          <Typography
            variant={variant}
            className={c(_textColor, {
              "color-disabled": withTitle && !_textColor,
              "color-secondary": !withTitle && !_textColor,
            })}
          >
            {text}
          </Typography>
        </div>
      );
    case "email":
      return (
        <div className="flex flex-col gap-2">
          {withTitle && (
            <Typography
              variant={variant}
              className={c(_textColor, { "color-primary": !_textColor })}
            >
              Электронная почта
            </Typography>
          )}
          <Typography
            variant={variant}
            className={c(_textColor, { "color-primary": !_textColor })}
          >
            {text}
          </Typography>
        </div>
      );
    case "link":
      return (
        <Link src={link}>
          <Typography
            variant={variant}
            className={c(_textColor, { "color-primary-black": !_textColor })}
          >
            {text}
          </Typography>
        </Link>
      );
    case "phone":
      return (
        <div className="flex flex-col gap-2">
          {withTitle && (
            <Typography
              variant={variant}
              className={c(_textColor, { "color-secondary": !_textColor })}
            >
              Телефон
            </Typography>
          )}
          <Typography
            variant={variant}
            className={c(_textColor, { "color-primary": !_textColor })}
          >
            <a href={`tel:${text}`}>{text}</a>
          </Typography>
        </div>
      );
    default:
      return null;
  }
};

export default ContactBlock;
