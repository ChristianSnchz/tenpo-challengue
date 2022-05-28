import React from 'react';
import styled from "styled-components/native";
import { Image } from "react-native";
const img = require("../imgs/location.png")

//#region styledComponents

const Address = styled.View`
  background-color: #d4f9f5;
  height: 100px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  align-items: center;
`;

const Row = styled.View<{ justify?: string; marginTop?: number }>`
  flex-direction: row;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin-top: ${(props) => props.marginTop || 0}px;
  align-items: center;
  padding: 0 18px;
`;

const AddressText = styled.Text`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #00baa4;
`;

//#endregion


const AdreesButton = () => {
  return (
    <Address>
    <Row marginTop={18}>
      <Image
        style={{ marginRight: 5, resizeMode: "contain" }}
        source={img}
      />
      <AddressText>Agregar direccion de entrega</AddressText>
    </Row>
  </Address>
  )
}

export default AdreesButton;
