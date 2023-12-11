import {UseFormRegister, useForm} from 'react-hook-form';
import FieldName from '../../../atoms/fieldName/FieldName';
import Input, {inputProps} from '../../../atoms/input/Input';
import {FormFieldArea, InputArea} from './style';

export interface formProps {
  fieldTitle: string;
  name: string;
  isBig?: boolean;
}

export default function FormField(props: formProps) {
  return (
    <FormFieldArea>
      <FieldName text={props.fieldTitle}></FieldName>
      <InputArea isBig={props.isBig}>
        <Input name={props.name}></Input>
      </InputArea>
    </FormFieldArea>
  );
}