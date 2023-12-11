import {Pressable} from 'react-native';
import {ButtonArea, ButtonText} from './style';
import React from 'react';

export interface press {
  onPress: () => void;
  buttonName: string;
  isScrollable?: boolean;
}

export default function Button(item: press) {
  return (
    <ButtonArea isScrollable={item.isScrollable} onPress={item.onPress}>
      <ButtonText> {`` + item.buttonName} </ButtonText>
    </ButtonArea>
  );
}
