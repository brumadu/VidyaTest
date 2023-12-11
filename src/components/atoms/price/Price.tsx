import {Text} from 'react-native';
import {PriceText} from './style';

export interface price {
  value: string;
}

export default function Price(price: price) {
  return <PriceText>{`R$ ` + price.value}</PriceText>;
}
