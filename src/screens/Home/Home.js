import React from "react";
import Header from "../../components/Header";
import Text from "../../components/Text/Text";
import TextInput from "../../components/TextInput/TextInput";
import { Container, Content, Welcome, InputWrapper, Segments } from "./styles";
import { FlatList } from "react-native";
import SegmentItem from "../../components/SegmentItem";

const data = ["moto", "moto", "carro", "caminhao"];

const Home = () => {
  return (
    <Container>
      <Header />
      {/* content */}
      <Content>
        <Welcome>
          <Text weight="BOLD" size="LG">
            Ola, Fulano
          </Text>

          <InputWrapper>
            <TextInput placeholder="Marca, Viscosidade, Classificação..." />
          </InputWrapper>
        </Welcome>

        <Segments>
          <Text size="2XL" color="PRIMARY" weight="BOLD">
            Segmentos
          </Text>

          <FlatList
            data={data}
            renderItem={(item) => <SegmentItem name={item.item} />}
            keyExtractor={({ item }) => `${Math.random(0, 1000)}-${item}`}
            horizontal
          />
        </Segments>
      </Content>
      {/* fim do content */}
    </Container>
  );
};

export default Home;
