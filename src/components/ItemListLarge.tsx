import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

//#region StyledComponents
const ItemCategory = styled.TouchableOpacity`
  width: 225px;  
  justify-content: center;
  align-items: center;
`;

const ContainerCategory = styled.View`
  margin-top: 10px;
`;

const CategoryName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
  position: absolute;
`;

const Img = styled.Image`
  width: 100%;  
  border-radius: 15px;
`;

//#endregion

export type Category = {
  id: string;
  file?: any;
  name?: string;
};

const ItemLarge = ({ file, name }: Category) => (
  <ContainerCategory>
    <ItemCategory>
      <Img source={file} />
      <CategoryName>{name}</CategoryName>   
    </ItemCategory>
  </ContainerCategory>
);

export default ItemLarge;
