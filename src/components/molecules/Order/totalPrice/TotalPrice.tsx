import Price from '../../../atoms/price/Price';
import {TotalPriceArea, TotalPriceText} from './style';

export interface totalPriceprops {
  totalPrice: string;
}

export default function TotalPrice(props: totalPriceprops) {
  return (
    <TotalPriceArea>
      <TotalPriceText>Total</TotalPriceText>
      <Price value={props.totalPrice} fontSize="14"></Price>
    </TotalPriceArea>
  );
}
