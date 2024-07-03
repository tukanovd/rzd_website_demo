import c from "classnames";
import { TextBlock as TextBlockType } from "@utils";
import { Typography } from "../Typography";

type TextBlockProps = TextBlockType & { className?: string };

const TextBlock = ({ text, type, className }: TextBlockProps) => {
  switch (type) {
    case "text": {
      return (
        <Typography
          variant="p1"
          className={c("color-primary-black", className)}
        >
          {text}
        </Typography>
      );
    }
    case "header": {
      return (
        <Typography
          variant="h2"
          className={c("py-5 color-primary-black", className)}
        >
          {text}
        </Typography>
      );
    }
    case "list": {
      return (
        <li className="pl-7 py-3">
          <Typography
            variant="p1"
            className={c("py-5 color-primary-black", className)}
          >
            {text}
          </Typography>
        </li>
      );
    }
    default:
      return null;
  }
};

export default TextBlock;
