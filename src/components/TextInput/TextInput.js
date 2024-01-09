import React, { useState } from "react";
import { Container } from "./styles";

const TextInput = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <Container
      placeholder={props.placeholder}
      keyboardType={props.type ? props.type : "default"}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secret ? props.secret : false}
      isFocus={onFocus}
      onFocus={() => setOnFocus(true)}
      onBlur={() => setOnFocus(false)}
      {...props}
    />
  );
};

export default TextInput;
