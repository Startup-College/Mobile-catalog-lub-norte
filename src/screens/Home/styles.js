import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.View`
  padding: ${GlobalStyles.spacing["2xl"]};
  width: 100%;
`;

export const Welcome = styled.View`
  width: 100%;
  gap: ${GlobalStyles.spacing["2xl"]};
`;
export const InputWrapper = styled.View`
  width: 100%;
`;

export const Segments = styled.View`
  margin-top: ${GlobalStyles.spacing["4xl"]};
  gap: ${GlobalStyles.spacing["2xl"]};
`;
