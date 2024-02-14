import React from "react";
import Header from "../../components/Header";
import Text from "../../components/Text/Text";
import TextInput from "../../components/TextInput/TextInput";
import { Container, Content, Welcome, InputWrapper, Segments } from "./styles";
import { FlatList } from "react-native";
import SegmentItem from "../../components/SegmentItem";

const data = [
  "moto",
  "carro",
  "caminhao",
  "agricola",
  "industria",
  "engrenagens",
  "complementar",
  "teste",
];

const Home = () => {
  return (
    <Container>
      <Header logo />
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
            renderItem={(item) => (
              <SegmentItem index={item.index} name={item.item} />
            )}
            keyExtractor={({ item }) => `${Math.random(0, 1000)}-${item}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 36 }}
          />
        </Segments>
      </Content>
      {/* fim do content */}
    </Container>
  );
};

export default Home;
