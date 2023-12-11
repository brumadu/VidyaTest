import {UseFormRegister, useForm} from 'react-hook-form';
import FieldName from '../../../atoms/fieldName/FieldName';
import Input, {inputProps} from '../../../atoms/input/Input';
import {FormFieldArea, InputArea} from './style';

export interface formProps {
  fieldTitle: string;
  name: string;
  value?: any;
  isBig?: boolean;
  autoFillValue?: (test: string) => void;
}

export default function FormField(props: formProps) {
  return (
    <FormFieldArea>
      <FieldName text={props.fieldTitle}></FieldName>
      <InputArea isBig={props.isBig}>
        <Input name={props.name} value={props.value} autoFillValue={props.autoFillValue}></Input>
      </InputArea>
    </FormFieldArea>
  );
}
