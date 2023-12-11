import {useNavigation} from '@react-navigation/native';
import {
  ClientInfoSubtitle,
  ClientInfoTitle,
  SelectClientArea,
  SelectClientInfoArea,
  SelectClientText,
} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {clientProps} from '../../../../store/reducers/Client.store';

export default function SelectClientField(props: clientProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SelectClientArea>
      <SelectClientText>Cliente Selecionado</SelectClientText>
      <SelectClientInfoArea
        onPress={() => navigation.navigate('OrderSelectClient')}>
        <ClientInfoTitle>
          {props.client?.name ? props.client?.name : 'adicione um cliente'}
        </ClientInfoTitle>
        <ClientInfoSubtitle>
          {props.client?.cnpj ? props.client?.cnpj : ''}
        </ClientInfoSubtitle>
      </SelectClientInfoArea>
    </SelectClientArea>
  );
}
