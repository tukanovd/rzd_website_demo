import c from "classnames";
import InlineSVG from "react-inlinesvg";
import { Layout, LayoutRow } from "../../Layout";
import { Typography } from "../../Typography";
import { Button } from "../../ButtonBase";
import { HeaderProps } from "../types";
import { useTheme, Fonts, Themes } from "@utils/themeSwitcher";
import Divider from "../../Divider";
import { Menu } from "../../Menu";
import Link from "../../Link";
import { EyeOpen } from "../../Icons";
import { changeRzdLogoColor } from "../utils";

const HeaderDesktop = (props: HeaderProps) => {
  const { support, menu, rzdLogo } = props;
  const { text: supportText, phone: supportPhone } = support;
  const {
    theme: currentTheme,
    font: currentFont,
    availableThemes,
    availableFonts,
    setTheme,
    setFont,
  } = useTheme();
  const _availableThemes = availableThemes.filter(
    (theme) => theme !== Themes.default
  );

  const handleBlindClick = () => {
    if (process.env.MGN_ONLY) {
      window.location.assign("https://dzvr.ru/");
    } else {
      localStorage.setItem("isMgn", "false");
      setTheme(Themes.default);
      setFont(null);
    }
  };

  const handleBlindEnter = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleBlindClick();
    }
  };

  return (
    <Layout cols="12" spacingX="xl" mdCols="4" className="md:grid hidden">
      <LayoutRow colSpan="6" className="flex gap-16 py-5 px-2.5">
        <div className="flex items-center gap-1">
          <Typography variant="p1" className="pr-5 color-primary-black">
            Шрифт
          </Typography>
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
        <div className="flex items-center gap-1">
          <Typography variant="p1" className="pr-5 color-primary-black">
            Цвет
          </Typography>
          {_availableThemes.map((theme) => {
            const style = c("w-[36px] h-[36px]", {
              "bg-a-white color-a-black border-a-black":
                theme === Themes["black-white"],
              "bg-a-black color-a-white border-a-white":
                theme === Themes["white-black"],
              "bg-a-blue color-a-black border-a-black":
                theme === Themes["black-blue"],
              "": theme === currentTheme,
            });

            return (
              <Button
                key={theme}
                variant={theme === Themes["black-white"] ? "outline" : "text"}
                size="content"
                classNames={style}
                onClick={() => setTheme(theme)}
                isSelected={currentTheme === theme}
              >
                <Typography variant="p1">Ц</Typography>
              </Button>
            );
          })}
        </div>
      </LayoutRow>
      <LayoutRow
        colSpan="6"
        className="flex items-center justify-end gap-6 py-5 px-2.5"
      >
        <span
          tabIndex={0}
          className="flex gap-1 items-center cursor-pointer color-primary-black"
          onClick={handleBlindClick}
          onKeyDown={handleBlindEnter}
        >
          <Typography variant="p3">Обычная версия сайта</Typography>
          <EyeOpen />
        </span>
      </LayoutRow>
      <LayoutRow colSpan="full">
        <Divider />
      </LayoutRow>
      <LayoutRow colSpan="6" className="py-5 px-2.5">
        <Link src="/" variant="black">
          <Typography variant="p3">Вокзалы России</Typography>
        </Link>
      </LayoutRow>
      <LayoutRow
        colSpan="6"
        className="flex items-center justify-end gap-6 py-5 px-2.5"
      >
        <Typography variant="p3" className="color-primary-black">
          {supportText}
        </Typography>
        <Typography variant="p3" className="color-primary-black">
          <a href={`tel:${supportPhone}`}>{supportPhone}</a>
        </Typography>
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
        {/* @ts-expect-error Server Component See - https://github.com/vercel/next.js/issues/42292 */}
        <Menu options={menu} />
      </LayoutRow>
      <LayoutRow colSpan="full">
        <Divider />
      </LayoutRow>
    </Layout>
  );
};

export default HeaderDesktop;
