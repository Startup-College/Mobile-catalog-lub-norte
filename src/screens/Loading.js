import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import Logo from "../assets/logo_branco.svg";
import { GlobalStyles } from "../styles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Logo width={160} height={160} />
      <ActivityIndicator size={64} color={GlobalStyles.colors.secondary[500]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary[500],
  },
});

export default Loading;
