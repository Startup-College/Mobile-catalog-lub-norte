import { Text, View } from "react-native";
import React from "react";
import { Container } from "./styles";
import Button from "../../components/Button/Button";

const Settings = ({ navigation }) => {
  function handlePress() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <Text>Settings</Text>
      <View style={{ width: "50%" }}>
        <Button variant="SECONDARY" title="Home" onPress={handlePress} />
      </View>
    </Container>
  );
};

export default Settings;
