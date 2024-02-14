import React from "react";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Description from "../../components/Description";
import Equivalence from "../../components/Equivalence";
import { Container } from "./styles";

const Product = () => {
  return (
    <Container>
      <Header logo leftIcon />

      <Products />

      <Description />

      <Equivalence />
    </Container>
  );
};

export default Product;
