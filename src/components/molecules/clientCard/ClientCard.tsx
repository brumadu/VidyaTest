import {useNavigation} from '@react-navigation/native';
import ClientDocument from '../../atoms/clientDocument/ClientDocument';
import ClientIcon from '../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../atoms/clientTitle/ClientTitle';
import {CardClientArea, ClientTextArea, IconArea} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface cardProps {
  name: string;
  document: string;
}

export default function ClientCard(props: cardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <CardClientArea onPress={() => navigation.navigate('ClientDetail')}>
      <IconArea>
        <ClientIcon name="ID" />
      </IconArea>
      <ClientTextArea>
        <ClientTitle name={props.name} />
        <ClientDocument document={props.document} />
      </ClientTextArea>
    </CardClientArea>
  );
}
