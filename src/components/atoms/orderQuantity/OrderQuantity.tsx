import {QuantityText} from './style';

export interface order {
  quantity: string;
}

export default function OrderQuantity(order: order) {
  return <QuantityText>{`Qtd. Produtos: ` + order.quantity}</QuantityText>;
}
