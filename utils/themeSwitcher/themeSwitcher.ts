import { AVAILABLE_FONTS, AVAILABLE_THEMES } from "./constants";
import { dispatch } from "./themeChangeEmmiter";
import {
  FontType,
  getAvailableFontsType,
  getAvailableThemesType,
  getCurrentFontType,
  getCurrentThemeType,
  setThemeType,
  Themes,
  ThemesType,
} from "./types";

let currSelectedTheme: ThemesType;
let currSelectedFont: FontType = null;

export const initializeTheme: (theme?: ThemesType, font?: FontType) => void = (theme, font) => {
	const defaultTheme = Themes.default;
	const defaultFont = null;

	setFont(font || defaultFont);
	setTheme(theme || defaultTheme);
};

export const setTheme: setThemeType = (theme: ThemesType) => {
  if (!theme) {
    console.error("setTheme error: Имя темы обязательно");
  } else {
    if (document) {
      document.documentElement.classList.remove(currSelectedTheme);
      document.documentElement.classList.add(theme);
      currSelectedTheme = theme;
      dispatch(theme, currSelectedFont);
    }
  }
};

export const setFont = (fontType: FontType) => {
  if (document) {
    currSelectedFont &&
      document.documentElement.classList.remove(currSelectedFont);

    fontType && document.documentElement.classList.add(fontType);

    currSelectedFont = fontType;
    dispatch(currSelectedTheme, fontType);
  }
};

export const getCurrentTheme: getCurrentThemeType = () => {
  return currSelectedTheme;
};
export const getCurrentFont: getCurrentFontType = () => {
  return currSelectedFont;
};

export const getAvailableThemes: getAvailableThemesType = () =>
  AVAILABLE_THEMES;
export const getAvailableFonts: getAvailableFontsType = () => AVAILABLE_FONTS;
