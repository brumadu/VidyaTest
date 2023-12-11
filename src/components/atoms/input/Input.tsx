import React, {Dispatch, SetStateAction} from 'react';
import {InputValue} from './style';

export interface inputProps {
  textValue?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

export default function Input(props: inputProps) {
  return (
    <InputValue
      value={props.textValue}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      autoCapitalize="none"
    />
  );
}
