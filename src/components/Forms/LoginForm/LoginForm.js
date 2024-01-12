import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import TextInput from "../../TextInput/TextInput";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import { FormWrapper, InputWrapper, SignUpForm, SubmitWrapper } from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log("email:", email);
  console.log("password:", password);
  return (
    <FormWrapper>
      <InputWrapper>
        <TextInput
          placeholder="Email"
          type="email-address"
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
      </InputWrapper>
      <SubmitWrapper>
        <TouchableOpacity activeOpacity={0.2}>
          <Text color="SECONDARY">Esqueci minha senha</Text>
        </TouchableOpacity>

        <Button title="acessar" />

        <SignUpForm>
          <Text>Não tenho conta.</Text>
          <TouchableOpacity>
            <Text color="SECONDARY">cadastre-se</Text>
          </TouchableOpacity>
        </SignUpForm>
      </SubmitWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
