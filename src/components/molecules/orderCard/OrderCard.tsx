import {CardArea} from '../../../styles';
import ClientIcon from '../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../atoms/clientTitle/ClientTitle';
import OrderQuantity from '../../atoms/orderQuantity/OrderQuantity';
import Price from '../../atoms/price/Price';
import {IconArea, OrderTextArea, PriceArea} from './style';

export default function OrderCard() {
  return (
    <CardArea>
      <IconArea>
        <ClientIcon name="ID" />
      </IconArea>
      <OrderTextArea>
        <ClientTitle name="Imperio dos Sonhos" />
        <OrderQuantity quantity={10} />
      </OrderTextArea>
      <PriceArea>
        <Price value={10.5} />
      </PriceArea>
    </CardArea>
  );
}
