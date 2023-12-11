import {ClientDocumentText} from './style';

export interface client {
  document: number;
}

export default function ClientDocument(client: client) {
  return <ClientDocumentText>{`cnpj ` + client.document}</ClientDocumentText>;
}
