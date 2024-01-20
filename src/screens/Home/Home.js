import { Text, View, TextInput } from "react-native";
import React from "react";
import Logo from '../../assets/logo_amarelo.svg'



const header = () => {
  return (
    
    <View>
        {/* header */}
        <View
        style={{
            width: '100%',
            height: 120,
            padding: 10,
            backgroundColor: '#144D2A',
            alignItems: "center",
            justifyContent: "flex-end"
        }}
        >
    

            <Logo
                height='80%'
                svgXmlData={Logo}
            />
            
        </View>
        {/* fim header */}

        {/* main */}
        <View   style={{margin: 15}}>
            <View>
            <Text
                style={{
                    fontSize: 15,
                    marginBottom: 15,
                    fontWeight: "bold"
                }}
            >Ola, Fulano</Text> 

                <TextInput placeholder="Marca, Viscosidade, Classificação..."
                style={{
                    height: 35,
                    marginVertical: 10,
                    backgroundColor:'#D9D9D9',
                    borderRadius: 5,
                }}
                />            
            </View>

            <View>

                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        marginVertical: 25,
                        color:'#144D2A',
                    }}
                >Segmentos
                </Text>

            </View>
        </View>
        {/* fim main */}

    </View>
  );
};

export default header;
