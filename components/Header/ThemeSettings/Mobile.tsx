import React, { useCallback, useState } from "react";
import c from "classnames";
import Card from "../../Card";
import TooltipContainer from "../../TooltipContainer";
import { Fonts, Themes, useTheme } from "@utils/themeSwitcher";
import { Settings as SettingsIcon } from "../../Icons";
import { Button } from "../../index";
import { Typography } from "../../Typography";
import Divider from "../../Divider";

const SettingsMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    font: currentFont,
    theme: currentTheme,
    availableThemes,
    availableFonts,
    setFont,
    setTheme,
  } = useTheme();
  const filteredThemes = availableThemes.filter(
    (theme) => theme !== Themes.default
  );

  const resetSettings = useCallback(() => {
    setFont(Fonts["font-A"]);
    setTheme(Themes["black-white"]);
  }, [setFont, setTheme]);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const renderer = () => {
    return (
      <Card outline rounded={false}>
        <div className="w-screen">
          <div className="flex flex-col gap-5 py-5 px-5">
            <Typography variant="h3">Размер шрифта</Typography>
            {availableFonts.map((font) => {
              const fontVariants = {
                [Fonts["font-A"]]: "bA",
                [Fonts["font-AA"]]: "bAA",
                [Fonts["font-AAA"]]: "bAAA",
              };
              const fontText = {
                [Fonts["font-A"]]: "Мелкий",
                [Fonts["font-AA"]]: "Средний",
                [Fonts["font-AAA"]]: "Большой",
              };
              return (
                <Button
                  key={font}
                  variant={currentFont === font ? "outline" : "text"}
                  size="content"
                  classNames="w-full h-[36px]"
                  onClick={() => setFont(font)}
                >
                  {/* @ts-ignore*/}
                  <Typography variant={fontVariants[font]}>
                    {fontText[font]}
                  </Typography>
                </Button>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 py-5 px-5">
            <Typography variant="h3">Цветовая схема</Typography>
            {filteredThemes.map((theme) => {
              const style = c("w-full h-[36px]", {
                "bg-a-white color-a-black border-a-black":
                  theme === Themes["black-white"],
                "bg-a-black color-a-white border-a-white":
                  theme === Themes["white-black"],
                "bg-a-blue color-a-black border-a-black":
                  theme === Themes["black-blue"],
                "": theme === currentTheme,
              });
              const themeText = {
                [Themes["black-white"]]: "Светлая",
                [Themes["white-black"]]: "Черная",
                [Themes["black-blue"]]: "Синяя",
              };

              return (
                <Button
                  key={theme}
                  variant={theme === Themes["black-white"] ? "outline" : "text"}
                  size="content"
                  classNames={style}
                  onClick={() => setTheme(theme)}
                  isSelected={currentTheme === theme}
                >
                  {/* @ts-ignore*/}
                  <Typography variant="p1">{themeText[theme]}</Typography>
                </Button>
              );
            })}
          </div>
          <Divider />

          <div className="flex flex-col gap-5 py-5 px-5">
            <Button onClick={resetSettings}>
              <Typography variant="p1">Сбросить настройки</Typography>
            </Button>
            <Button onClick={closeMenu}>
              <Typography variant="p1">Закрыть</Typography>
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <TooltipContainer
      visible={isOpen}
      tooltipRenderer={renderer}
      options={{ placement: "bottom-start", offset: [0, 12] }}
    >
      <span
        className={c(
          "flex cursor-pointer justify-between items-center color-primary-black"
        )}
        onClick={toggleMenu}
      >
        <SettingsIcon />
      </span>
    </TooltipContainer>
  );
};

export default SettingsMobile;
