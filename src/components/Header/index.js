import Logo from "../../assets/logo_amarelo.svg";
import React from "react";
import { Container, Mammut, LeftIcon, RightIcon } from "./styles";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";

const Header = ({ leftIcon, logo, rightIcon }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <LeftIcon
        activeOpacity={0.2}
        onPress={() => {
          navigation.goBack();
        }}
      >
        {leftIcon ? (
          <Feather
            name="chevron-left"
            size={32}
            color={GlobalStyles.colors.secondary[500]}
          />
        ) : null}
      </LeftIcon>
      <Mammut>{logo ? <Logo width={72} height={72} /> : null}</Mammut>
      <RightIcon activeOpacity={0.2} onPress={() => {}}>
        {rightIcon ? (
          <Feather
            name="x"
            size={32}
            color={GlobalStyles.colors.secondary[500]}
          />
        ) : null}
      </RightIcon>
    </Container>
  );
};

export default Header;
