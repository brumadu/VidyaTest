import {ProductNameText} from './style';

export interface nameText {
  name: string;
}

export default function ProductName(item: nameText) {
  return <ProductNameText>{item.name}</ProductNameText>;
}
