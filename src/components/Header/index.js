import Logo from "../../assets/logo_amarelo.svg";
import React from "react";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo width={102} height={102} />
    </Container>
  );
};

export default Header;
