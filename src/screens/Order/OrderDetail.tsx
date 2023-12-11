import {useRoute} from '@react-navigation/native';
import OrderDetailStructure from '../../components/organisms/Order/orderDetailStructure/OrderDetailStructure';
import {Container} from '../../styles';

export default function OrderDetail() {
  const route = useRoute();
  return (
    <Container>
      <OrderDetailStructure
        order={
          // @ts-ignore
          route.params.selectedOrder
        }></OrderDetailStructure>
    </Container>
  );
}
