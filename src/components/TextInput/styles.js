import styled from "styled-components/native";
import { GlobalStyles } from "../../styles/styles";

export const Container = styled.TextInput.attrs({
  placeholderTextColor: `${GlobalStyles.colors.gray[400]}`,
})`
  background-color: ${GlobalStyles.colors.gray[200]};
  border-radius: 999px;
  width: "100%";
  padding: ${GlobalStyles.spacing.xl} ${GlobalStyles.spacing["4xl"]};
  margin-left: ${GlobalStyles.spacing["4xl"]};
  margin-right: ${GlobalStyles.spacing["4xl"]};
  color: ${GlobalStyles.colors.primary[700]};
  font-size: ${GlobalStyles.fontSize.md};
  text-decoration: none;
  /* border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.isFocus ? GlobalStyles.colors.primary[300] : "rgba(0, 0, 0, 0)"}; */
`;
