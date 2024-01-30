import React, { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { View } from "react-native";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Logo from "../../assets/logo_branco.svg";
import { Container, InputWrapper, FormWrapper, SubmitWrapper } from "./styles";

const SignUp = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [numer, setNumer] = useState();
  const [phone, setPhone] = useState();
  const [cep, setCep] = useState();
  const [city, setCity] = useState();
  const [ruanumer, setRuaNumer] = useState();
  const [complet, setComplet] = useState();
  const [uf, setUf] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log("Nome:", name);
  console.log("Sobrenome:", surname);
  console.log("CNPJ/CPF:", numer);
  console.log("Telefone:", phone);
  console.log("Cep:", cep);
  console.log("Cidade:", city);
  console.log("Rua e numero:", ruanumer);
  console.log("complemento:", complet);
  console.log("UF:", uf);
  console.log("Email:", email);
  console.log("Senha:", password);

  return (
    <Container>
      <Text color={"PRIMARY"} uppercase size={"3XL"}>
        CADASTRO
      </Text>
      <Logo />
      <FormWrapper>
        <InputWrapper>
          <View style={{flexDirection: "row", maxWidth: "container"}}>
          <TextInput
            placeholder="Nome"
            type="keyboardType"
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <TextInput
            placeholder="Sobrenome"
            type="keyboardType"
            value={surname}
            onChangeText={(e) => setSurname(e)}
          />
          </View>
     
          <TextInput
            placeholder="CPF/CNPJ"
            type="numeric"
            value={numer}
            onChangeText={(e) => setNumer(e)}
          />
          <TextInput
            placeholder="Telefone"
            type="numeric"
            value={phone}
            onChangeText={(e) => setPhone(e)}
          />
   
          <TextInput
            placeholder="CEP"
            type="numeric"
            value={cep}
            onChangeText={(e) => setCep(e)}
          />
          <TextInput
            placeholder="Cidade"
            type="keyboardType"
            value={city}
            onChangeText={(e) => setCity(e)}
          />
    
          <TextInput
            placeholder="Rua, Numero"
            type="keyboardType"
            value={ruanumer}
            onChangeText={(e) => setRuaNumer(e)}
          />
      
          <TextInput
            placeholder="Complemento"
            type="keyboardType"
            value={complet}
            onChangeText={(e) => setComplet(e)}
          />
          <TextInput
            placeholder="UF"
            type="keyboardType"
            value={uf}
            onChangeText={(e) => setUf(e)}
          />
      
          <TextInput
            placeholder="Email"
            type="keyboardType"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
       
          <TextInput
            placeholder="Senha"
            type="numeric"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secret
          />
          <TextInput
            placeholder="Repita Senha"
            type="numeric"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secret
          />
        </InputWrapper>

        <SubmitWrapper>
          <Button title="CADASTRAR" />
        </SubmitWrapper>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
