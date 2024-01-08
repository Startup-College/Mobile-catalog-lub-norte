import React from "react";
import { Container } from "./styles";
import { GlobalStyles } from "../../styles/styles";
import Text from "../Text/Text";

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
      <Text color="WHITE" weight="BOLD" size="LG" align="CENTER" uppercase>
        {props.title}
      </Text>
    </Container>
  );
};

export default Button;
