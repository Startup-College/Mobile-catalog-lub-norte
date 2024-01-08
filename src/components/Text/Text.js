import React from "react";
import { CText } from "./styles";

const Text = (props) => {
  return (
    <CText
      color={props.color}
      weight={props.weight}
      uppercase={props.uppercase}
      align={props.align}
      size={props.size}
      decoration={props.decoration}
    >
      {props.children}
    </CText>
  );
};

export default Text;
