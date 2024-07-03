export enum Themes {
  "default" = "default",
  "black-white" = "black-white",
  "white-black" = "white-black",
  "black-blue" = "black-blue",
}

export enum Fonts {
  "font-A" = "font-A",
  "font-AA" = "font-AA",
  "font-AAA" = "font-AAA",
}

export type FontType = keyof typeof Fonts | null;
export type getCurrentFontType = () => FontType;
export type getAvailableFontsType = () => Fonts[];
export type setFontType = (Font: FontType) => void;

export type ThemesType = keyof typeof Themes;
export type getCurrentThemeType = () => ThemesType;
export type getAvailableThemesType = () => Themes[];
export type setThemeType = (Theme: ThemesType) => void;

export type themeChangeCallback = (theme: ThemesType, font: FontType) => void;
export type dispatchThemeChangeType = (
  theme: ThemesType,
  font: FontType
) => void;
export type onThemeChangeType = (callback: themeChangeCallback) => void;
export type themeChangeSubscribers = Set<themeChangeCallback>;

export type useThemeType = (theme?: ThemesType) => {
  theme: ThemesType;
  font: FontType;
  setTheme: setThemeType;
  setFont: setFontType;
  availableThemes: Themes[];
  availableFonts: Fonts[];
};
