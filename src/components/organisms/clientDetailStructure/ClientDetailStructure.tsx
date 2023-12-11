import ClientData from '../../molecules/clientData/ClientData';

export interface clientData {
  data: clientDataDetails[];
}

export interface clientDataDetails {
  cnpj: number;
  phone: number;
  cep: number;
  state: string;
  city: string;
  district: string;
  address: string;
  number: number;
}

export default function ClientDetailStructure(props: clientData) {
  return (
    <>
      <ClientData title="CNPJ" dataText={'' + props.data[0].cnpj}></ClientData>
      <ClientData
        title="Telefone"
        dataText={'' + props.data[0].phone}></ClientData>
      <ClientData title="CEP" dataText={'' + props.data[0].cep}></ClientData>
      <ClientData
        title="Estado"
        dataText={'' + props.data[0].state}></ClientData>
      <ClientData
        title="Cidade"
        dataText={'' + props.data[0].city}></ClientData>
      <ClientData
        title="Bairro"
        dataText={'' + props.data[0].district}></ClientData>
      <ClientData
        title="Endereco"
        dataText={'' + props.data[0].address}></ClientData>
      <ClientData
        title="Numero"
        dataText={'' + props.data[0].number}></ClientData>
    </>
  );
}
