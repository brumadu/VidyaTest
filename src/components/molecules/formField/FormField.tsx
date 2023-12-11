import FieldName from '../../atoms/fieldName/FieldName';
import Input, {inputProps} from '../../atoms/input/Input';
import {FormFieldArea, InputArea} from './style';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

export default function FormField<formField extends FieldValues>(
  props: UseControllerProps<formField> & inputProps,
) {
  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({field: {value, onChange}}) => (
        <FormFieldArea>
          <FieldName text={props.name}></FieldName>
          <InputArea>
            <Input textValue={value} onChangeText={onChange}></Input>
          </InputArea>
        </FormFieldArea>
      )}></Controller>
  );
}
