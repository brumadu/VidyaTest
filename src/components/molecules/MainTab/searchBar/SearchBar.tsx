import Icon from 'react-native-vector-icons/FontAwesome6';
import Input from '../../../atoms/input/Input';
import React, {useState} from 'react';
import {IconArea, SearchBarArea} from './style';
import {lightTheme} from '../../../../../ligthTheme';
import {InputValue} from '../../../atoms/input/style';
import FormField from '../formField/FormField';

export default function SearchBar() {
  const [text, onChangeText] = useState('');

  // do a Search Field
  return (
    <SearchBarArea>
      <IconArea>
        <Icon
          name="magnifying-glass"
          size={25}
          color={lightTheme.colors.primaryText}></Icon>
      </IconArea>
      {/* <FormField ></FormField> */}
    </SearchBarArea>
  );
}
