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
import {Dispatch, SetStateAction, useEffect, useState} from 'react';

export interface selectedProps extends clientProps {
  setSelectedClient: Dispatch<SetStateAction<Client | undefined>>;
  isSelected: boolean;
}

export default function SelectedClientCard(props: selectedProps) {
  return (
    <CardClientArea onPress={() => props.setSelectedClient(props.client)}>
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
