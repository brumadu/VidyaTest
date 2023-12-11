import {FieldText} from './style';

export interface fieldName {
  text: string;
}

export default function FieldName(item: fieldName) {
  return <FieldText> {item.text} </FieldText>;
}
