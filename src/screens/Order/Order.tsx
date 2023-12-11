import {Container} from '../../styles';
import OrderStructure from '../../components/organisms/orderStructure/OrderStructure';

export default function Order({navigation}: any) {
  return (
    <Container>
      <OrderStructure navigation={navigation} />
    </Container>
  );
}
