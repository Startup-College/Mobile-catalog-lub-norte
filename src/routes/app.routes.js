import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

const RoutesManager = () => {
  const auth = true;
  return (
    <NavigationContainer>
      {auth ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default RoutesManager;
