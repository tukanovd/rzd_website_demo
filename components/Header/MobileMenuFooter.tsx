import InlineSVG from "react-inlinesvg";
import { Button } from "../ButtonBase";
import Link from "../Link";
import { Typography } from "../Typography";
import { HeaderData } from "./types";
import { useTheme } from "@utils/themeSwitcher";

const MobileMenuFooter = ({ button, vk, telegram, support }: HeaderData) => {
  const { src: vkSrc, iconSrc: vkIcon } = vk;
  const { src: telegramSrc, iconSrc: telegramIcon } = telegram;
  const { text: supportText, phone: supportPhone } = support;
  const { text: buttonText } = button;

  const { theme } = useTheme();
  const isMgn = theme !== "default";

  return (
    <div className="block">
      <div className="w-full px-3 py-4">
        <Button variant="outline">{buttonText}</Button>
      </div>
      <div className="flex px-3 pb-4">
        <div className="flex items-center grow gap-6">
          <Link src={vkSrc}>
            <InlineSVG src={isMgn ? vkIcon.replace(".", "Black.") : vkIcon} />
          </Link>
          <Link src={telegramSrc}>
            <InlineSVG
              src={isMgn ? telegramIcon.replace(".", "Black.") : telegramIcon}
            />
          </Link>
        </div>

        <div className="grid grow">
          <Typography variant="p3">{supportText}</Typography>
          <Typography variant="p1">
            <a href={`tel:${supportPhone}`}>{supportPhone}</a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuFooter;
