import React from "react";
import Logo from "../../assets/logo_amarelo";
import { Svg, Circle } from "react-native-svg";

import { Container, LogoWrapper, SVGWrapper } from "./styles";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import Text from "../../components/Text/Text";
import { GlobalStyles } from "../../styles/styles";

const SignIn = () => {
  return (
    <Container>
      <SVGWrapper>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
          <Circle
            cx="70"
            cy="-15"
            r="45"
            fill={GlobalStyles.colors.secondary[500]}
          />
        </Svg>
      </SVGWrapper>
      <LogoWrapper>
        <Text color={"WHITE"} uppercase size={"2XL"}>
          MAMMOTECH
        </Text>
        <Logo height={80} width={80} />
      </LogoWrapper>
      <LoginForm />
    </Container>
  );
};

export default SignIn;
