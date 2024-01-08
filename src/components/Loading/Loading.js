import React from "react";
import { ActivityIndicator } from "react-native";
import { GlobalStyles } from "../../styles/styles";

const Loading = (props) => {
  function handleColor(color) {
    switch (color) {
      case "PRIMARY":
        return GlobalStyles.colors.primary[500];
      case "SECONDARY":
        return GlobalStyles.colors.secondary[500];
      default:
        return GlobalStyles.colors.primary[500];
    }
  }

  return (
    <ActivityIndicator
      size={props.size ? props.size : 32}
      color={handleColor(props.color)}
    />
  );
};

export default Loading;
