import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

type ListProps = {
  data: any[];
  renderItem: ({ item }: { item: any }) => JSX.Element;
  title: string;
};

const Title = styled.Text<{  size?: number; }>`
  font-size: ${(props) => props.size || 40}px;
  font-weight: bold;
  margin-top: 20px;
`;

const Wrapper = styled.View`
  margin-top: 0px;
`;

const List = ({ data, renderItem, title }: ListProps) => {
  return (
    <Wrapper>
      <Title size={20}>{title}</Title>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
      />
    </Wrapper>
  );
};

export default List;
