import Icon from 'react-native-vector-icons/FontAwesome6';
import {ProductQuantifierArea, QuantifierButton, QuantifierText} from './style';
import {lightTheme} from '../../../../ligthTheme';
import {useDispatch} from 'react-redux';
import {Dispatch, SetStateAction} from 'react';
import {Alert} from 'react-native';
import {
  decreaseTotalPrice,
  increaseTotalPrice,
} from '../../../store/reducers/Order.store';

export interface quantityProps {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  price: number;
}

export default function ProductQuantifier(props: quantityProps) {
  const dispatch = useDispatch();

  function handleIncrease() {
    const total = props.quantity + 1;
    props.setQuantity(total);
    dispatch(increaseTotalPrice(props.price));
  }
  function handleDecrease() {
    if (props.quantity != 0) {
      props.setQuantity(props.quantity - 1);
      dispatch(decreaseTotalPrice(props.price));
    }
  }
  return (
    <ProductQuantifierArea>
      <QuantifierButton onPress={() => handleDecrease()}>
        <Icon
          name="minus"
          size={25}
          color={lightTheme.colors.primaryButton}></Icon>
      </QuantifierButton>
      <QuantifierText>{String('' + props.quantity)}</QuantifierText>
      <QuantifierButton onPress={() => handleIncrease()}>
        <Icon
          name="plus"
          size={25}
          color={lightTheme.colors.primaryButton}></Icon>
      </QuantifierButton>
    </ProductQuantifierArea>
  );
}
