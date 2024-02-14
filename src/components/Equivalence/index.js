import React from "react";
import { Container, HeaderEquivalence, Equivalents, Itens } from "./styles"
import Text from "../Text/Text";
import { FlatList, View } from "react-native";


const data = [
    {
        id: '1',
        title: 'Óleo 1'
    },
    {
        id: '2',
        title: 'Óleo 2'
    },
    {
        id: '3',
        title: 'Óleo 3'
    },
    {
        id: '4',
        title: 'Óleo 4'
    },
    {
        id: '5',
        title: 'Óleo 5'
    },
];

const Item = ({title}) => (
    <Itens>
      <Text>{title}</Text>
    </Itens>
  );

const Equivalence = () => {
    return(
        <Container>
        
            <HeaderEquivalence>
                <Text weight='BOLD' size='LG'
                color='GRAY'>
                    Equivalência
                </Text>
            </HeaderEquivalence>

            <Equivalents>
               
               <FlatList 
                data={data}
                renderItem={({item}) => <Item title = {item.title} />}
               
               />

            </Equivalents>

        </Container>
    );
};

export default Equivalence;