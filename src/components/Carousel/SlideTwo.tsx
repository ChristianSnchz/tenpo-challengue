import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
`;

const SlideTwo = () => {
  return (
    <Container>
      <Text>SlideTwo</Text>
    </Container>
  );
};
export default SlideTwo;
