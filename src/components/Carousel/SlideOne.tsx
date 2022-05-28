import React from 'react'
import styled from "styled-components/native";
import { Image, View } from "react-native";

//#region styledComponents

const Row = styled.View<{ justify?: string; marginTop?: number }>`
  flex-direction: row;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin-top: ${(props) => props.marginTop || 0}px;
  align-items: center;
  padding: 0 18px;
`;

const Title = styled.Text<{ color?: string; size?: number; spacing?: number }>`
  font-size: ${(props) => props.size || 40}px;
  font-weight: bold;
  color: ${(props) => props.color || "#000"};
  letter-spacing: ${(props) => props.spacing || 0}px;
`;

const Img = styled.Image`
  position: absolute;
  width: 200px;
  right: -15px;
`;

const Point = styled.Image<{top?:number, right?: number}>`
  position: absolute;
  width: 8px;
  top: ${(props) => props.top || 0}px;
  right: ${(props) => props.right || 0}px;
`;

//#endregion


const SlideOne = () => {
  return (
    <Row marginTop={45}>
    <View>
      <Title>Tenpo</Title>
      <Title color="#00BAA4">Eats</Title>
      <Title size={15} spacing={3}>
        DELIVERY APP
      </Title>
    </View>
    <Image
      style={{ width: 200, resizeMode: "contain" }}
      source={require("../../imgs/moto.png")}
    />
    <Img
      style={{ resizeMode: "contain" }}
      source={require("../../imgs/hand.png")}
    />
    <Point right={20} source={require("../../imgs/point.png")} />
    <Point right={30} top={-30} source={require("../../imgs/point.png")} />
    <Point right={160} top={-40} source={require("../../imgs/point.png")} />
    <Point right={160} top={5} source={require("../../imgs/point.png")} />
  </Row>
  )
}

export default SlideOne;
