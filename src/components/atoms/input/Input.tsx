import React, {Dispatch, SetStateAction} from 'react';
import {InputValue} from './style';
import {RegisterOptions, useForm} from 'react-hook-form';

export interface inputProps {
  name: string;
  textValue?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

export default function Input(input: inputProps) {
  const {register} = useForm();
  return (
    <InputValue
      {...register(input.name)}
      placeholder={input.placeholder}
      autoCapitalize="none"
    />
  );
}
