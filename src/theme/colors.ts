import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#1F73BE",
  primaryBright: "#227dcf",
  primaryDark: "#11406a",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#d1e5f7",
  text: "#1F73BE",
  textDisabled: "#BDC2C4",
  textSubtle: "#1F73BE",
  borderColor: "black",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
  locked: '#E9EAEB',
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#124068",
  text: "#1F73BE",
  textDisabled: "#BDC2C4",
  textSubtle: "#1F73BE",
  borderColor: "white",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
  locked: "#3C3742",
};
