import {useNavigation} from '@react-navigation/native';
import ClientDocument from '../../../atoms/clientDocument/ClientDocument';
import ClientIcon from '../../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../../atoms/clientTitle/ClientTitle';
import {CardClientArea, ClientTextArea, IconArea} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {clientProps} from '../../../../store/reducers/Client.store';

export default function ClientCard(props: clientProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <CardClientArea
      onPress={() =>
        navigation.navigate('ClientDetail', {selectedClient: props.client})
      }>
      <IconArea>
        <ClientIcon name="ID" />
      </IconArea>
      <ClientTextArea>
        <ClientTitle name={props.client.name} />
        <ClientDocument document={props.client.cnpj} />
      </ClientTextArea>
    </CardClientArea>
  );
}
