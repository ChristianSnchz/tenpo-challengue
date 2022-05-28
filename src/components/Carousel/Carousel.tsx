import React, { useRef, useState } from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import styled from "styled-components/native";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const data = [
  {
    id: 0,
    title: "Item 1",
    text: "Text 1",
  },
  {
    id: 1,
    title: "Item 2",
    text: "Text 2",
  },
];


const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;

export const CarouselComponent = () => {
  const carousel = useRef<Carousel<unknown> | null>(null);
  const { width: windowWidth } = Dimensions.get("window");
  const [index, setindex] = useState(0);

  const renderSlide = (item: { item?: any; id?: any }) => {    
    if (item.item.id === 0) return <SlideOne />;
    if (item.item.id === 1) return <SlideTwo />;

    return <View />;
  };

  return (
    <Container>
      <Carousel
        loop={true}        
        ref={carousel}
        data={data}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * (100 / 100)}
        renderItem={(item: { item: any }) => renderSlide(item)}
        onSnapToItem={(index) => setindex(index)}
      />
    </Container>
  );
};

export default CarouselComponent;
