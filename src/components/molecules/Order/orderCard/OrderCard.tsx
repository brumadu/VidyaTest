import {Alert} from 'react-native';
import {orderProps} from '../../../../store/reducers/Order.store';
import ClientIcon from '../../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../../atoms/clientTitle/ClientTitle';
import OrderQuantity from '../../../atoms/orderQuantity/OrderQuantity';
import Price from '../../../atoms/price/Price';
import {IconArea, OrderCardArea, OrderTextArea, PriceArea} from './style';
import {clientDataProps} from '../../Client/clientData/ClientData';

export default function OrderCard(props: orderProps, client: clientDataProps) {
  return (
    <OrderCardArea onPress={() => Alert.alert('not implemented')}>
      <IconArea>
        <ClientIcon name={client.dataText} />
      </IconArea>
      <OrderTextArea>
        <ClientTitle name={client.title} />
        <OrderQuantity quantity={String(props.order.totalProducts)} />
      </OrderTextArea>
      <PriceArea>
        <Price value={props.order.totalPrice} fontSize="14" />
      </PriceArea>
    </OrderCardArea>
  );
}
