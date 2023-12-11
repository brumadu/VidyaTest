import Icon from 'react-native-vector-icons/FontAwesome6';

import React, {Dispatch, SetStateAction, useState} from 'react';
import {IconArea, SearchBarArea} from './style';
import {lightTheme} from '../../../../../ligthTheme';

import SearchInput from '../../../atoms/searchInput/SearchField';

export interface searchProps {
  text: string;
  changeText: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

export default function SearchBar(props: searchProps) {
  return (
    <SearchBarArea>
      <IconArea>
        <Icon
          name="magnifying-glass"
          size={25}
          color={lightTheme.colors.primaryText}></Icon>
      </IconArea>
      <SearchInput
        text={props.text}
        changeText={props.changeText}></SearchInput>
    </SearchBarArea>
  );
}
