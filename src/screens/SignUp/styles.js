import styled from "styled-components";
import { GlobalStyles } from "../../styles/styles";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: ${GlobalStyles.spacing["2xl"]};
  padding-right: ${GlobalStyles.spacing["2xl"]};
`;

export const FormWrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: blue;
  width: 100%;
`;

export const InputWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  background-color: red;
  width: 100%;
`;

export const SubmitWrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: green;
`;
