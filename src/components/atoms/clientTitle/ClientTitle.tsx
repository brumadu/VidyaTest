import {Text} from 'react-native';
import {ClientText} from './style';

export interface client {
  name: string;
}

export default function ClientTitle(client: client) {
  return <ClientText>{client.name}</ClientText>;
}
