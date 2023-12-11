import Icon from 'react-native-vector-icons/FontAwesome6';
import Input from '../../atoms/input/Input';
import React, {useState} from 'react';
import {IconArea, SearchBarArea} from './style';
import {lightTheme} from '../../../../ligthTheme';

export default function SearchBar() {
  const [text, onChangeText] = useState('');

  return (
    <SearchBarArea>
      <IconArea>
        <Icon
          name="magnifying-glass"
          size={25}
          color={lightTheme.colors.primaryText}></Icon>
      </IconArea>
      <Input
        textValue={text}
        onChangeText={onChangeText}
        placeholder="Pesquisar"></Input>
    </SearchBarArea>
  );
}
