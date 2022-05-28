import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";

const star = require("../imgs/star.png");

//#region StyledComponents
const ItemRestaurant = styled.TouchableOpacity`
  width: 115px;
  height: 115px;
  justify-content: center;
  align-items: center;
`;

const ContainerRestaunrant = styled.View`
  margin-top: 10px;
`;

const RestName = styled.Text`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
`;

const DetailRest = styled.Text`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
`;

const Promo = styled.View`
  position: absolute;
  background-color: #00BAA4;
  border-radius: 50px;
  width: 35px;
  height: 35px;  
  justify-content: center;
  top: 0;
  right: 0;
`;

const PromoText = styled.Text`
  color: white;
  text-align: center;
  font-size: 10px; 
  font-weight: bold ;
`;

//#endregion

export type Restaunrant = {
  id: string;
  file?: any;
  name?: string;
  rate?: number;
  time?: string;
  promo?: number;
};

const Item = ({ file, name, rate, time, promo }: Restaunrant) => (
  <ContainerRestaunrant>
    <ItemRestaurant>
      <Image style={{ resizeMode: "contain" }} source={file} />
      {promo && (
        <Promo>          
          <PromoText>{promo} % DCTO</PromoText>
        </Promo>
      )}
    </ItemRestaurant>
    <RestName>{name}</RestName>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 15, marginRight: 5, resizeMode: "contain" }}
        source={star}
      />
      <DetailRest>
        {rate} {time}
      </DetailRest>
    </View>
  </ContainerRestaunrant>
);

export default Item;
