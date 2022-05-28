import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
const img = require("./imgs/location.png");
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//#region styledComponents

const Wrapper = styled.View`
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const Address = styled.View`
  background-color: #d4f9f5;
  height: 100px;
`;

const AddressText = styled.Text`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #00baa4;
`;

const TextInput = styled.TextInput`
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 50px;
  margin-top: -20px;
  box-shadow: 4px 4px -1px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Location = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`;

const LocationText = styled.Text`
  font-size: 16px;
  color: grey;
`;

const Backbutton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 10px;
`;

const Map = styled.Image`
  flex: 1;
  width: 100%;
`;

//#endregion

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setsearch] = useState<string>();

  console.log(search, "HOLA");

  return (
    <Wrapper>
      <Address>
        <Row>
          <Image
            style={{ marginRight: 5, resizeMode: "contain" }}
            source={img}
          />
          <AddressText> Agregar direccion de entrega</AddressText>
        </Row>
      </Address>
      <TextInput
        onChangeText={(value) => setsearch(value)}
        value={search}
        placeholder="Escribe tu direccion"
      />
      <Location>
        {search ? (
          <Map
            source={{
              uri: "https://www.google.com/maps/d/thumbnail?mid=1y0bdR4xPdrO3mVTQffBz9s30Q2s&hl=es",
            }}
          />
        ) : (
          <LocationText>Esperando tu ubicacion...</LocationText>
        )}
      </Location>
      <Backbutton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </Backbutton>
    </Wrapper>
  );
};

export default SearchScreen;
