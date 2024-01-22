import React from "react";
import { Container } from "./styles";
import Text from "../Text/Text";
import Industria from "../../assets/industry.svg";
import Engrenagens from "../../assets/gear.svg";
import Agricola from "../../assets/tractor.svg";
import Complementar from "../../assets/oil.svg";
import Carro from "../../assets/car.svg";
import Moto from "../../assets/motorcycle.svg";
import Caminhao from "../../assets/truck.svg";

const SegmentItem = (props) => {
  function handleSvg(name) {
    switch (name) {
      case "carro":
        return <Carro width={128} height={128} />;
      case "moto":
        return <Moto width={128} height={128} />;
      case "caminhao":
        return <Caminhao width={128} height={128} />;
      case "agricola":
        return <Agricola width={128} height={128} />;
      case "industria":
        return <Industria width={128} height={128} />;
      case "engrenagens":
        return <Engrenagens width={128} height={128} />;
      case "complementar":
        return <Complementar width={128} height={128} />;
    }
  }

  return (
    <Container activeOpacity={0.8} index={props.index}>
      {handleSvg(props.name)}
      <Text
        color={props.index % 2 === 0 ? "WHITE" : "BLACK"}
        size="2XL"
        weight="BOLD"
      >
        {props.name}
      </Text>
    </Container>
  );
};

export default SegmentItem;
