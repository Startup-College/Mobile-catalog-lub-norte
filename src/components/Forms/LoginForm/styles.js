import styled from "styled-components";
import { GlobalStyles } from "../../../styles/styles";

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${GlobalStyles.spacing.lg};
  padding: ${GlobalStyles.spacing["3xl"]};
  width: 100%;
`;

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: ${GlobalStyles.spacing["2xl"]};
`;

export const SubmitWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: ${GlobalStyles.spacing["2xl"]};
  gap: ${GlobalStyles.spacing["2xl"]};
`;

export const SignUpForm = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: ${GlobalStyles.spacing.md};
`;
