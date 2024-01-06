import { Text, View } from "react-native";
import React from "react";
import { Container } from "./styles";
import Button from "../../components/Button/Button";

const Home = ({ navigation }) => {
  function handlePress() {
    navigation.navigate("Settings");
  }
  return (
    <Container>
      <Text>Home</Text>
      <View style={{ width: "50%" }}>
        <Button variant="PRIMARY" title="Settings" onPress={handlePress} />
      </View>
    </Container>
  );
};

export default Home;
