import {clientProps} from '../../../store/reducers/Client.store';
import {Scroll} from '../../../styles';
import ClientData from '../../molecules/clientData/ClientData';

export default function ClientDetailStructure(props: clientProps) {
  return (
    <>
      <ClientData title="CNPJ" dataText={'' + props.client.cnpj}></ClientData>
      <ClientData
        title="Telefone"
        dataText={'' + props.client.phone}></ClientData>
      <ClientData title="CEP" dataText={'' + props.client.cep}></ClientData>
      <ClientData
        title="Estado"
        dataText={'' + props.client.state}></ClientData>
      <ClientData title="Cidade" dataText={'' + props.client.city}></ClientData>
      <ClientData
        title="Bairro"
        dataText={'' + props.client.district}></ClientData>
      <ClientData
        title="Endereco"
        dataText={'' + props.client.address}></ClientData>
      <ClientData
        title="Numero"
        dataText={'' + props.client.number}></ClientData>
    </>
  );
}
