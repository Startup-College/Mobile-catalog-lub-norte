/*import React, { useState } from "react";
import { FormWrapper, InputWrapper, SubmitWrapper } from "./styles";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../Button/Button";

const CadastroForm = () => {
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
    console.log("name:", name);
    console.log("surname:", surname);
    return (
      <FormWrapper>
        <InputWrapper>
       
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
        placeholder="Cep"
        type="numeric"
        value={cep}
        onChangeText={(e) => setCep(e)}
        />
  
        
        <TextInput
        placeholder="Cidade"
        type="keyboarType"
        value={city}
        onChangeText={(e) => setCity(e)}
        />
        
        <TextInput
        placeholder="Rua, Numero"
        type="keyboarType"
        value={ruanumer}
        onChangeText={(e) => setRuaNumer(e)}
        />
        
        <TextInput
        placeholder="Complemento"
        type="keyboarType"
        value={complet}
        onChangeText={(e) => setComplet(e)}
        />
        
        <TextInput
        placeholder="UF"
        type="keyboarType"
        value={uf}
        onChangeText={(e) => setUf(e)}
        />
        
        <TextInput
        placeholder="Email"
        type="keyboarType"
        value={email}
        onChangeText={(e) => setEmail(e)}
        />
        
        <TextInput
        placeholder="Senha"
        type="numer"
        value={password}
        onChangeText={(e) => setPassword(e)}
        secret
        />
        
        <TextInput
        placeholder="Repita Senha"
        type="numer"
        value={password}
        onChangeText={(e) => setPassword(e)}
        secret
        />
  
        </InputWrapper>
        <SubmitWrapper>
        <Button title="CADASTRAR" />
        </SubmitWrapper>
      </FormWrapper>
    );
  };
  
  export default CadastroForm;*/