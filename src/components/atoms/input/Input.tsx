import React, {Dispatch, SetStateAction} from 'react';
import {InputValue} from './style';

export interface text {
  textValue: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

export default function Input(text: text) {
  return (
    <InputValue
      value={text.textValue}
      onChangeText={text.onChangeText}
      placeholder={text.placeholder}
    />
  );
}
