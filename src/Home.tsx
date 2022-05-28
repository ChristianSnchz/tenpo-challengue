import React from "react";
import styled from "styled-components/native";
import {  ScrollView } from "react-native";
import Item, { Restaunrant } from "./components/ItemListRegular";
import List from "./components/InnerList";
import ItemLarge, { Category } from "./components/ItemListLarge";
import { Categorias, Favorites, Restaurantes } from "./mockData/mock";
import ItemDetail from "./components/ItemDetail";
import AdreesButton from "./components/AdreesButton";
import HeaderHome from "./components/HeaderHome";
import CarouselComponent from "./components/Carousel/Carousel";

//#region StyledComponents
const Container = styled.View`
  background-color: #f2f2f2;
  flex: 1;
`;

const TouchBar = styled.View`
  padding: 20px;
  background-color: #fff;
  width: 210px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 10px;
`;

const Center = styled.View`
  align-items: center;
`;

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

const ContainerFood = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: -40px;
  padding: 25px;
`;

//#endregion


const Home = () => {
  const restaurantItem = ({ item }: { item: Restaunrant }) => (
    <Item {...item} />
  );
  const categoryItem = ({ item }: { item: Category }) => (
    <ItemLarge {...item} />
  );

  const FavoriteItem = ({ item }: { item: Restaunrant }) => (
    <ItemDetail {...item} />
  );

  return (
    <ScrollView>
      <Container>  
        <HeaderHome/>
        <CarouselComponent/>
        <AdreesButton />
        <ContainerFood>
          <List
            title="RESTAURANTES"
            data={Restaurantes}
            renderItem={restaurantItem}
          />
          <List
            title="CATEGORIAS"
            data={Categorias}
            renderItem={categoryItem}
          />
          <List
            title="TUS FAVORITOS"
            data={Favorites}
            renderItem={FavoriteItem}
          />
        </ContainerFood>
      </Container>
    </ScrollView>
  );
};

export default Home;
