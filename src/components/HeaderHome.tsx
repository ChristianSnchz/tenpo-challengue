import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const user = require("../imgs/user.png");
const search = require("../imgs/search.png");

const Row = styled.View<{ justify?: string; marginTop?: number }>`
  flex-direction: row;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin-top: ${(props) => props.marginTop || 0}px;
  align-items: center;
  padding: 0 18px;
`;

const HeaderHome = () => {
  const navigation = useNavigation();

  return (
    <Row justify="space-between" marginTop={10}>
      <TouchableOpacity onPress={() => console.log("HI")}>
        <Image
          style={{ width: 50, resizeMode: "contain" }}
          source={user}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search' as any)   }>
        <Image
          style={{ width: 25, resizeMode: "contain" }}
          source={search}
        />
      </TouchableOpacity>
    </Row>
  );
};

export default HeaderHome;
