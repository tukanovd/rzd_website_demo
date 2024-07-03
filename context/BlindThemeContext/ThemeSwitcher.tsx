import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { BlindThemeContext } from "./BlindThemeContext";
import { Fonts, setFont, setTheme, Themes } from "@utils/themeSwitcher";

const switchToBlindTheme = () => {
  setTheme(Themes["black-white"]);
  setFont(Fonts["font-A"]);
};

type ThemeSwitcherT = {
  isBlindPersonPath: boolean;
  currentPath: string;
};

export const ThemeSwitcher = (props: ThemeSwitcherT) => {
  const { isBlindPersonPath } = props;
  const { currentPath } = props;
  const router = useRouter();
  const { setIsBlindTheme } = useContext(BlindThemeContext);

  const changeTheme = () => {
    switchToBlindTheme();
    setIsBlindTheme(true);
    localStorage.setItem("isMgn", "true");
    router.push(currentPath);
  };

  useEffect(() => {
    if (isBlindPersonPath) {
      changeTheme();
    }
  }, [changeTheme, isBlindPersonPath]);

  return null;
};
