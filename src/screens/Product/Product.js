import React from "react";
import Header from "../../components/Header";
import Products from "../../components/Products";

import { Container } from "./styles";
import Description from "../../components/Description";
import { View } from "react-native";


const Product = () => {
    return(
        <Container>
            <Header/>

            <View>

            <Products />

            <Description />
                
            </View>

        </Container>
    );
};

export default Product;