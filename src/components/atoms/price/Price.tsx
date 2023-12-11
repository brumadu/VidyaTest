import {Text} from 'react-native';
import {PriceText} from './style';

export interface price {
  value: string;
  fontSize: string;
}

export default function Price(price: price) {
  return <PriceText fontSize={price.fontSize}>{`R$ ` + price.value}</PriceText>;
}
