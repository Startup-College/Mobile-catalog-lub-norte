import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

function handleColor(color) {
  switch (color) {
    case "WHITE":
      return GlobalStyles.colors.gray[100];
    case "PRIMARY":
      return GlobalStyles.colors.primary[500];
    case "SECONDARY":
      return GlobalStyles.colors.secondary[500];
    case "DELETE":
      return GlobalStyles.colors.delete[500];
    default:
      return GlobalStyles.colors.gray[900];
  }
}

function handleWeight(weight) {
  switch (weight) {
    case "NORMAL":
      return "normal";
    case "BOLD":
      return "bold";
    case "BLACK":
      return 900;
    default:
      return "normal";
  }
}

function handleAlign(align) {
  switch (align) {
    case "JUSTIFY":
      return "justify";
    case "LEFT":
      return "left";
    case "RIGHT":
      return "right";
    case "CENTER":
      return "center";
    default:
      return "left";
  }
}

function handleSize(size) {
  switch (size) {
    case "XS":
      return `${GlobalStyles.fontSize.xs}px`;
    case "SM":
      return `${GlobalStyles.fontSize.sm}px`;
    case "MD":
      return `${GlobalStyles.fontSize.md}px`;
    case "LG":
      return `${GlobalStyles.fontSize.lg}px`;
    case "XL":
      return `${GlobalStyles.fontSize.xl}px`;
    case "2XL":
      return `${GlobalStyles.fontSize["2xl"]}px`;
    case "3L":
      return `${GlobalStyles.fontSize["3xl"]}px`;
    default:
      return `${GlobalStyles.fontSize.md}px`;
  }
}

export const CText = styled.Text`
  font-weight: ${(props) => handleWeight(props.weight)};
  color: ${(props) => handleColor(props.color)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "capitalize")};
  text-align: ${(props) => handleAlign(props.align)};
  font-size: ${(props) => handleSize(props.size)};
  text-decoration: ${(props) => props.decoration};
`;
