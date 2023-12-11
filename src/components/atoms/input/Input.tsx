import React from 'react';
import {InputValue} from './style';
import {Controller, useFormContext} from 'react-hook-form';

export interface inputProps {
  name: string;
  placeholder?: string;
}

export default function Input(props: inputProps) {
  const {control, setValue} = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({field}) => (
        <InputValue
          {...field}
          placeholder={props.placeholder}
          autoCapitalize="none"
          onChangeText={text => setValue(props.name, text)}
        />
      )}
    />
  );
}
