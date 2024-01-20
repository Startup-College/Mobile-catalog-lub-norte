import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

function handleBackgroundColor(name) {
  switch (name) {
    case "moto":
      return GlobalStyles.colors.primary[500];
    case "carro":
      return GlobalStyles.colors.secondary[500];
    default:
      return GlobalStyles.colors.gray[500];
  }
}

export const Container = styled.View`
  background-color: ${(props) => handleBackgroundColor(props.name)};
  height: 256px;
  width: 256px;
  border-radius: ${GlobalStyles.spacing["xl"]};
  align-items: center;
  justify-content: center;
  margin-right: ${GlobalStyles.spacing["2xl"]};
  gap: ${GlobalStyles.spacing["2xl"]};
`;
