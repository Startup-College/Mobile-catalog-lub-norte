import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

export const Container = styled.View`
  width: 100%;
  padding-top: ${GlobalStyles.spacing["2xl"]};
`;

export const HeaderEquivalence = styled.View`
  width: 100%;
  background-color: ${GlobalStyles.colors.gray[200]};
  padding: ${GlobalStyles.spacing["md"]};
`;

export const Equivalents = styled.View`
  height: 100%;

`;

export const Itens = styled.View`
  align-items: center;
  border: 1px ${GlobalStyles.colors.gray[100]};
`;