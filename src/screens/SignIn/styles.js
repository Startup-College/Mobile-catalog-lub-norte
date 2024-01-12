import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

export const Container = styled.View`
  background-color: ${GlobalStyles.colors.gray[100]};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: 96px;
  position: relative;
`;

export const SVGWrapper = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const LogoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  border-radius: ${GlobalStyles.spacing["xl"]};
  gap: ${GlobalStyles.spacing["3xl"]};
  padding: ${GlobalStyles.spacing.md} ${GlobalStyles.spacing.sm};
  background-color: ${GlobalStyles.colors.primary[500]};
  margin-bottom: 72px;
`;
