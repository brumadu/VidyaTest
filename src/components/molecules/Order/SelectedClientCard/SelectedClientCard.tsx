import ClientDocument from '../../../atoms/clientDocument/ClientDocument';
import ClientIcon from '../../../atoms/clientIcon/ClientIcon';
import ClientTitle from '../../../atoms/clientTitle/ClientTitle';
import {Client, clientProps} from '../../../../store/reducers/Client.store';
import {
  CardClientArea,
  ClientTextArea,
  IconArea,
} from '../../Client/clientCard/style';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Dispatch, SetStateAction, useState} from 'react';

export interface selectedProps extends clientProps {
  onChange: Dispatch<SetStateAction<Client | undefined>>;
}

export default function SelectedClientCard(props: selectedProps) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelected() {
    setIsSelected(true);
    props.onChange(props.client);
  }

  return (
    <CardClientArea onPress={handleSelected}>
      <IconArea>
        <ClientIcon name="ID" />
      </IconArea>
      <ClientTextArea>
        <ClientTitle name={props.client.name} />
        <ClientDocument document={props.client.cnpj} />
      </ClientTextArea>
      {isSelected ? <Icon name="check" size={20} color={`blue`} /> : <></>}
    </CardClientArea>
  );
}
