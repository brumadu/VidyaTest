import {useNavigation} from '@react-navigation/native';
import ClientDocument from '../../../atoms/clientDocument/ClientDocument';
import ClientIcon from '../../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../../atoms/clientTitle/ClientTitle';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {clientProps} from '../../../../store/reducers/Client.store';
import {
  CardClientArea,
  ClientTextArea,
  IconArea,
} from '../../Client/clientCard/style';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Dispatch, SetStateAction} from 'react';
import {setSelectedClient} from '../../../../store/reducers/Order.store';
import {Alert} from 'react-native';

export interface selectedProps extends clientProps {
  isSelected: boolean;
}

export default function SelectedClientCard(props: selectedProps) {
  return (
    <CardClientArea onPress={() => setSelectedClient(props.client.id)}>
      <IconArea>
        <ClientIcon name="ID" />
      </IconArea>
      <ClientTextArea>
        <ClientTitle name={props.client.name} />
        <ClientDocument document={props.client.cnpj} />
      </ClientTextArea>
      {props.isSelected ? (
        <Icon name="check" size={20} color={`blue`} />
      ) : (
        <></>
      )}
    </CardClientArea>
  );
}
