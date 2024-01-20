import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";
import StatusBarHeight from "../../utils/StatusBarHeight";

export const Container = styled.View`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
  background-color: ${GlobalStyles.colors.primary[500]};
  padding-top: ${StatusBarHeight};
`;
