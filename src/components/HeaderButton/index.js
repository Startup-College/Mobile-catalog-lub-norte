import Logo from "../../assets/logo_amarelo.svg";
import React from "react";
import { Container, Mammut } from "./styles";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../../styles/styles";

const HeaderButton = () => {
  return (
    <Container>
      <Feather name="chevron-left" size={45} color={GlobalStyles.colors.secondary[500]} />
      
      <Mammut>
        <Logo width={102} height={102} />
      </Mammut>
    </Container>
  );
};

export default HeaderButton;
