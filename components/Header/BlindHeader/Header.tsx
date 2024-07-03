import HeaderDesktop from "./Desktop";
import { HeaderData } from "../types";
import HeaderMobile from "./Mobile";
import { setFont, setTheme, Themes } from "@utils/themeSwitcher";

const Header = (props: HeaderData) => {
  const switchToDefaultTheme = () => {
    setTheme(Themes.default);
    setFont(null);
  };

  return (
    <>
      <HeaderDesktop {...props} onBlindClick={switchToDefaultTheme} />
      <HeaderMobile {...props} onBlindClick={switchToDefaultTheme} />
    </>
  );
};

export default Header;
