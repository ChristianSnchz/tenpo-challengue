import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";

const star = require("../imgs/star.png")

//#region StyledComponents
const ContainerImage = styled.TouchableOpacity`
  width: 260px;
  justify-content: center;
  align-items: center;
`;

const ContainerInfo = styled.View`
  box-shadow: -2px 8px 10px rgba(0, 0, 0, 0.2);
  elevation: 2;
`;

const Wrapper = styled.View`
  margin-top: 10px;
`;

const Promotion = styled.Text`
  font-size: 12px;
  font-weight: 300;
`;

const NameLocal = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #00baa4;
`;

const Img = styled.Image`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ImgLogo = styled.Image`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 10px;
  left: 15px;
`;

const DetailFavorite = styled.Text`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  align-items: center;
  margin-bottom: 3px;
`;
//#endregion

export type Detail = {
  id: string;
  file?: any;
  name?: string;
  promotion?: string;
  logo?: any;
  rate?: number;
  time?: string;
};

const ItemDetail = ({ file, name, rate, time, promotion, logo }: Detail) => (
  <Wrapper>
    <ContainerImage>
      <Img source={file} />
      <ImgLogo source={logo} />
    </ContainerImage>
    <ContainerInfo>
      <Row>
        <Promotion>{promotion}</Promotion>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 15, marginRight: 5, resizeMode: "contain" }}
            source={star}
          />
          <DetailFavorite>{rate}</DetailFavorite>
        </View>
      </Row>
      <Row>
        <NameLocal>{name}</NameLocal>
        <DetailFavorite>{time}</DetailFavorite>
      </Row>
    </ContainerInfo>
  </Wrapper>
);

export default ItemDetail;
