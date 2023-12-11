import {ClientDataArea, ClientDataSubTitle, ClientDataTitle} from './style';

export interface clientDataProps {
  title: string;
  dataText: string;
}

export default function ClientData(props: clientDataProps) {
  return (
    <ClientDataArea>
      <ClientDataTitle>{'' + props.title}</ClientDataTitle>
      <ClientDataSubTitle>{'' + props.dataText}</ClientDataSubTitle>
    </ClientDataArea>
  );
}
