import {clientProps} from '../../../../store/reducers/Client.store';
import {orderProps} from '../../../../store/reducers/Order.store';
import {SafeArea} from '../../../../styles';
import OrderData from '../../../molecules/Order/orderData/OrderData';

export default function OrderDetailStructure(props: orderProps) {
  return (
    <SafeArea>
      <OrderData order={props.order} />
    </SafeArea>
  );
}
