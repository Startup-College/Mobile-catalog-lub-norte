import React from "react";
import { Container } from "./styles";
import Text from "../Text/Text";
import Logo from "../../assets/logo_branco.svg";

const SegmentItem = (props) => {
  return (
    <Container name={props.name}>
      <Logo width={128} height={128} fill="#000" />
      <Text
        color={props.name === "carro" ? null : "WHITE"}
        size="2XL"
        weight="BOLD"
      >
        {props.name}
      </Text>
    </Container>
  );
};

export default SegmentItem;
