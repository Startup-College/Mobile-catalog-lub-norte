import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

export const Container = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.index % 2 === 0
      ? GlobalStyles.colors.primary[500]
      : GlobalStyles.colors.secondary[500]};
  height: 256px;
  width: 256px;
  border-radius: ${GlobalStyles.spacing["xl"]};
  align-items: center;
  justify-content: center;
  margin-right: ${GlobalStyles.spacing["2xl"]};
  gap: ${GlobalStyles.spacing["2xl"]};
`;
