import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";
import StatusBarHeight from "../../utils/StatusBarHeight";

export const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${GlobalStyles.colors.primary[500]};
  padding-top: ${StatusBarHeight};
`;

export const Mammut = styled.View`
    width: 80%;
    align-items: center;
`