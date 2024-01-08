import { View } from "react-native";
import React from "react";
import { Container } from "./styles";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";

const Home = ({ navigation }) => {
  function handlePress() {
    navigation.navigate("Settings");
  }
  return (
    <Container>
      <Text size="LG" weight="BOLD">
        Home
      </Text>
      <View style={{ width: "50%" }}>
        <Button variant="PRIMARY" title="Settings" onPress={handlePress} />
      </View>
    </Container>
  );
};

export default Home;
