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

export const LeftIcon = styled.TouchableOpacity`
  display: flex;
  width: 15%;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${GlobalStyles.spacing["2xl"]};

`

export const Mammut = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

`;


export const RightIcon = styled.TouchableOpacity`
  display: flex;
  width: 15%;
  align-items: flex-end;
  background-color: blue;
  padding-right: ${GlobalStyles.spacing["2xl"]};

`