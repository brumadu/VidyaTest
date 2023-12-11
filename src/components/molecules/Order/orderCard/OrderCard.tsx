import {Alert} from 'react-native';
import {orderProps} from '../../../../store/reducers/Order.store';
import ClientIcon from '../../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../../atoms/clientTitle/ClientTitle';
import OrderQuantity from '../../../atoms/orderQuantity/OrderQuantity';
import Price from '../../../atoms/price/Price';
import {IconArea, OrderCardArea, OrderTextArea, PriceArea} from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Client, useClientSelect} from '../../../../store/reducers/Client.store';
import {useEffect} from 'react';

export default function OrderCard(props: orderProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <OrderCardArea
      onPress={() =>
        navigation.navigate('OrderDetail', {
          selectedOrder: props.order,
          orderClient: props.order.selectedClient,
        })
      }>
      <IconArea>
        <ClientIcon name={'HK'} />
      </IconArea>
      <OrderTextArea>
        {props.order.selectedClient !== undefined ? (
          <ClientTitle name={props.order.selectedClient.name} />
        ) : (
          <></>
        )}
        <OrderQuantity quantity={String(props.order.totalProducts)} />
      </OrderTextArea>
      <PriceArea>
        <Price value={props.order.totalPrice} fontSize="14" />
      </PriceArea>
    </OrderCardArea>
  );
}
