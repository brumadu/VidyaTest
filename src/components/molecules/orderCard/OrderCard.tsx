import {orderData} from '../../../store/reducers/Order.store';
import {CardArea} from '../../../styles';
import ClientIcon from '../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../atoms/clientTitle/ClientTitle';
import OrderQuantity from '../../atoms/orderQuantity/OrderQuantity';
import Price from '../../atoms/price/Price';
import {IconArea, OrderCardArea, OrderTextArea, PriceArea} from './style';

export default function OrderCard(props: orderData) {
  return (
    <OrderCardArea>
      <IconArea>
        <ClientIcon name={props.order.client.name} />
      </IconArea>
      <OrderTextArea>
        <ClientTitle name={props.order.client.name} />
        <OrderQuantity quantity={props.order.productQuantity} />
      </OrderTextArea>
      <PriceArea>
        <Price value={props.order.totalCost} />
      </PriceArea>
    </OrderCardArea>
  );
}
