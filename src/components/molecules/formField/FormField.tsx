import {useState} from 'react';
import FieldName from '../../atoms/fieldName/FieldName';
import Input from '../../atoms/input/Input';
import {FormFieldArea, InputArea} from './style';

export default function FormField() {
  const [text, setText] = useState('');

  return (
    <FormFieldArea>
      <FieldName text="hey there"></FieldName>
      <InputArea>
        <Input onChangeText={setText} textValue={text}></Input>
      </InputArea>
    </FormFieldArea>
  );
}
