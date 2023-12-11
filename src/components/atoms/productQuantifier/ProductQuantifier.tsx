import Icon from 'react-native-vector-icons/FontAwesome6';
import {ProductQuantifierArea, QuantifierButton, QuantifierText} from './style';
import {lightTheme} from '../../../../ligthTheme';

export default function ProductQuantifier() {
  return (
    <ProductQuantifierArea>
      <QuantifierButton>
        <Icon
          name="minus"
          size={25}
          color={lightTheme.colors.primaryButton}></Icon>
      </QuantifierButton>
      <QuantifierText>0</QuantifierText>
      <QuantifierButton>
        <Icon
          name="plus"
          size={25}
          color={lightTheme.colors.primaryButton}></Icon>
      </QuantifierButton>
    </ProductQuantifierArea>
  );
}
