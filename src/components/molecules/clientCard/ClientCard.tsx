import ClientDocument from '../../atoms/clientDocument/ClientDocument';
import ClientIcon from '../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../atoms/clientTitle/ClientTitle';
import {CardClientArea, ClientTextArea, IconArea} from './style';

export default function ClientCard({navigation}: any) {
  return (
    <CardClientArea onPress={() => navigation.navigate('ClientDetail')}>
      <IconArea>
        <ClientIcon name="ID" />
      </IconArea>
      <ClientTextArea>
        <ClientTitle name="Imperio dos Sonhos" />
        <ClientDocument document={49503384800} />
      </ClientTextArea>
    </CardClientArea>
  );
}
