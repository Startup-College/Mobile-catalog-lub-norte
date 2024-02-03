import React from "react";
import HeaderButton from "../../components/HeaderButton"
import Products from "../../components/Products";
import Description from "../../components/Description";
import Equivalence from "../../components/Equivalence";
import { Container } from "./styles";




const Product = () => {
    return(
        <Container>
            <HeaderButton
            />
        
            <Products />

            <Description />
            
            <Equivalence />
        </Container>
    );
};

export default Product;