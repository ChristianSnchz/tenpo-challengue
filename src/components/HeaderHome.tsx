import React from 'react'
import { Image, TouchableOpacity, View, ScrollView } from "react-native";
import styled from "styled-components/native";

const Row = styled.View<{ justify?: string; marginTop?: number }>`
  flex-direction: row;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin-top: ${(props) => props.marginTop || 0}px;
  align-items: center;
  padding: 0 18px;
`;

const HeaderHome = () => {
  return (
    <Row justify="space-between" marginTop={10}>
    <TouchableOpacity onPress={() => console.log("HI")}>
      <Image
        style={{ width: 50, resizeMode: "contain" }}
        source={require("../imgs/user.png")}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => console.log("HI")}>
      <Image
        style={{ width: 25, resizeMode: "contain" }}
        source={require("../imgs/search.png")}
      />
    </TouchableOpacity>
  </Row>
  )
}

export default HeaderHome;