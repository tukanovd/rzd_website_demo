import InlineSVG from "react-inlinesvg";
import { Layout, LayoutRow } from "../../Layout";
import { Typography } from "../../Typography";
import { Button } from "../../ButtonBase";
import { useTheme, Fonts, Themes } from "@utils/themeSwitcher";
import Divider from "../../Divider";
import { MenuMobile } from "../../Menu";
import Link from "../../Link";
import MobileMenuFooter from "../MobileMenuFooter";
import { EyeOpen } from "../../Icons";
import ThemeSettings from "../ThemeSettings";
import { HeaderProps } from "../types";
import { changeRzdLogoColor } from "../utils";

const MobileHeader = (props: HeaderProps) => {
  const { menu, rzdLogo } = props;
  const { font: currentFont, availableFonts, setTheme, setFont } = useTheme();

  const handleBlindClick = () => {
    //if (process.env.MGN_ONLY) {
    window.location.assign("https://dzvr.ru/");
    //} else {
    //	localStorage.setItem('isMgn', 'false');
    //	setTheme(Themes.default);
    //	setFont(null);
    //}
  };

  const footerRenderer = () => {
    return <MobileMenuFooter {...props} />;
  };

  return (
    <Layout cols="12" spacingX="xl" mdCols="2" className="md:hidden">
      <LayoutRow colSpan="6" className="flex gap-16 py-5 px-2.5">
        <div className="flex items-center gap-1">
          {availableFonts.map((font) => {
            const fontVariants = {
              [Fonts["font-A"]]: "bA",
              [Fonts["font-AA"]]: "bAA",
              [Fonts["font-AAA"]]: "bAAA",
            };

            return (
              <Button
                key={font}
                variant={currentFont === font ? "outline" : "text"}
                size="content"
                classNames="w-[36px] h-[36px]"
                onClick={() => setFont(font)}
              >
                {/* @ts-ignore*/}
                <Typography variant={fontVariants[font]}>A</Typography>
              </Button>
            );
          })}
        </div>
      </LayoutRow>
      <LayoutRow
        colSpan="6"
        className="flex items-center justify-end gap-6 py-5 px-2.5"
      >
        <ThemeSettings />
        <span
          className="flex items-center cursor-pointer color-primary-black"
          onClick={handleBlindClick}
        >
          <EyeOpen />
        </span>
      </LayoutRow>
      <LayoutRow colSpan="full">
        <Divider />
      </LayoutRow>
      <LayoutRow colSpan="full" className="py-5 px-2.5">
        <Link src="/" variant="black">
          <Typography variant="p1">Вокзалы России</Typography>
        </Link>
      </LayoutRow>
      <LayoutRow colSpan="full">
        <Divider />
      </LayoutRow>
      <LayoutRow colSpan="6" className="py-5 px-2.5">
        <Typography variant="p1" className="color-primary-black">
          <InlineSVG src={rzdLogo} preProcessor={changeRzdLogoColor} />
        </Typography>
      </LayoutRow>
      <LayoutRow
        colSpan="6"
        className="flex items-center justify-end gap-6 py-5 px-2.5"
      >
        <MenuMobile options={menu} footerRenderer={footerRenderer} />
      </LayoutRow>
      <LayoutRow colSpan="full">
        <Divider />
      </LayoutRow>
    </Layout>
  );
};

export default MobileHeader;
