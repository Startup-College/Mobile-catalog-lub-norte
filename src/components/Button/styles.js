import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.color};
  width: 100%;
  padding: 12px 14px;
  border-radius: 999px;
`;

export const Children = styled.Text`
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;
