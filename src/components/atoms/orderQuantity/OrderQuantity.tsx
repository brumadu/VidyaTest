import {QuantityText} from './style';

export interface order {
  quantity: number;
}

export default function OrderQuantity(order: order) {
  return <QuantityText>{`Qtd. Produtos: ` + order.quantity}</QuantityText>;
}
