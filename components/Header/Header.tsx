import DefaultHeader from "./DefaultHeader";
import BlindHeader from "./BlindHeader";
import { HeaderData } from "./types";
import { useTheme, Themes } from "@utils/themeSwitcher";

const Header = (props: HeaderData) => {
  const { theme } = useTheme();

  if (theme === Themes.default) {
    return <DefaultHeader {...props} />;
  }

  return <BlindHeader {...props} />;
};

export default Header;
