import React from "react";
import { Container, Children } from "./styles";
import { GlobalStyles } from "../../styles/styles";

const Button = (props) => {
  function handleWithBackgroundColor(variant) {
    switch (variant) {
      case "PRIMARY":
        return GlobalStyles.colors.primary[500];
      case "SECONDARY":
        return GlobalStyles.colors.secondary[500];
      case "DELETE":
        return GlobalStyles.colors.delete[500];
      default:
        return GlobalStyles.colors.primary[500];
    }
  }
  return (
    <Container
      color={handleWithBackgroundColor(props.variant)}
      onPress={props.onPress}
    >
      <Children>{props.title}</Children>
    </Container>
  );
};

export default Button;
