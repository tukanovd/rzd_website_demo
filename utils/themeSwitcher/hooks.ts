import { useCallback, useEffect, useState } from "react";

import { subscribe, unsubscribe } from "./themeChangeEmmiter";
import {
  getAvailableFonts,
  getAvailableThemes,
  getCurrentFont,
  getCurrentTheme,
  setFont,
  setTheme,
} from "./themeSwitcher";
import { Fonts, FontType, Themes, ThemesType, useThemeType } from "./types";

const useTheme: useThemeType = (theme) => {
  const [newTheme, setNewTheme] = useState<ThemesType>(getCurrentTheme());
  const [newFont, setNewFont] = useState<FontType>(getCurrentFont());
  const [availableThemes] = useState<Themes[]>(getAvailableThemes());
  const [availableFonts] = useState<Fonts[]>(getAvailableFonts());

  const updateTheme = useCallback((updatedTheme: ThemesType) => {
    setTheme(updatedTheme);
    setNewTheme(updatedTheme);
  }, []);

  const updateFont = useCallback((updatedFont: FontType) => {
    setFont(updatedFont);
    setNewFont(updatedFont);
  }, []);

  useEffect(() => {
    if (theme) {
      setNewTheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    subscribe(setNewTheme);

    return () => unsubscribe(setNewTheme);
  }, [setNewTheme]);

  return {
    theme: newTheme,
    font: newFont,
    setTheme: updateTheme,
    setFont: updateFont,
    availableThemes,
    availableFonts,
  };
};

export { useTheme };
