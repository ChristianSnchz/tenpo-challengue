// eslint-disable-next-line import/no-extraneous-dependencies
import { Entypo } from '@expo/vector-icons';
import React, { VFC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Container = styled.View<{
    headerTop: number;
    bottomLeft?: boolean;
    topLeft?: boolean;
}>`
  position: absolute;
  bottom: 50px;
  right: 20px;

  ${({ bottomLeft }) =>
        bottomLeft &&
    `
  bottom: 80px;
  right: 20px;`}

  ${({ topLeft, headerTop }) =>
        topLeft &&
    `
  top: ${headerTop}px;
  left: 20px;
  bottom: 0px;
  right:  0px;`}
`;

const Button = styled.TouchableOpacity`
  z-index: 5;
  height: 50px;
  width: 50px;
  background-color: #00baa4;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;



type FabProps = {
    icon?: JSX.Element;
    onPress: () => void;
    bottomLeft?: boolean;
    topLeft?: boolean;
};

export const FloatingActionButtom: VFC<FabProps> = ({
    onPress,
    icon,
    bottomLeft,
    topLeft,
}) => {
    const { top } = useSafeAreaInsets();
    return (
        <Container bottomLeft={bottomLeft} topLeft={topLeft} headerTop={top}>
            <Button activeOpacity={0.9} onPress={onPress}>
                {/* <TextButton></TextButton> */}
                {icon ? icon : <Entypo name='location' size={24} color='white' />}
            </Button>
        </Container>
    );
};
