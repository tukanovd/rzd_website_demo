import HeaderDesktop from "./Desktop";
import { HeaderData } from "../types";
import HeaderMobile from "./Mobile";
import { setFont, setTheme, Fonts, Themes } from "@utils/themeSwitcher";

const Header = (props: HeaderData) => {
  const { setIsBlindTheme } = props;

  const switchToBlindTheme = () => {
    setTheme(Themes["black-white"]);
    setFont(Fonts["font-A"]);
  };
  return (
    <>
      <HeaderDesktop {...props} onBlindClick={switchToBlindTheme} />
      <HeaderMobile {...props} onBlindClick={switchToBlindTheme} />
    </>
  );
};

export default Header;
