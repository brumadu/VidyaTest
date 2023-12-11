import {useState} from 'react';
import FieldName from '../../atoms/fieldName/FieldName';
import Input from '../../atoms/input/Input';
import {FormFieldArea, InputArea} from './style';

export interface formField {
  name: string;
  isBig?: boolean;
  isDrawer?: boolean;
}

export default function FormField(item: formField) {
  const [text, setText] = useState('');

  return (
    <FormFieldArea>
      <FieldName text={item.name}></FieldName>
      <InputArea>
        <Input onChangeText={setText} textValue={text}></Input>
      </InputArea>
    </FormFieldArea>
  );
}
