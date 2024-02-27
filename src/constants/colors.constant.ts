import { alpha } from "@mui/material";

export const COLORS = {
  primary: "#379ff2",
  secondary: "#FCE38A",
  third: "#EAFFD0",
  fourth: "#95E1D3",
  background: "#F2F2F7",
  black: "#000",
  red: "#ff0000",
  blue: "#482AF4",
  white: "#ffffff",
  error: "#E34F4A",
  textInputBackground: alpha("#134C59", 0.04),
  textInputPlaceholder: alpha("#282828", 0.3),
  grey: {
    transparent: "RGBA(243, 243, 243, 0.2)",
    200: "RGBA(243, 243, 243)",
    300: "rgba(0, 0, 0, 0.10)",
    400: "rgba(0, 0, 0, 0.30)",
    500: "RGB(149, 149, 166)",
  },
  NOT_KNOWN: "rgba(111, 204, 102)",
  KNOWN: "rgba(222, 212, 0)",
  CYBER_RISK: "rgba(36, 0, 224)",
  PROVEN_RISK: "rgba(227, 79, 74)",
  PRIVATE: "rgba(193, 0, 127, 1)",
  COMPANY: "rgba(160, 47, 246, 1)",
  PROFESSIONAL: "rgba(124, 53, 232, 1)",
};
