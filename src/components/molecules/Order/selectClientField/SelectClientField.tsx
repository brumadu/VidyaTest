import {
  ClientInfoSubtitle,
  ClientInfoTitle,
  SelectClientArea,
  SelectClientInfoArea,
  SelectClientText,
} from './style';

export default function SelectClientField() {
  return (
    <SelectClientArea>
      <SelectClientText>Cliente Selecionado</SelectClientText>
      <SelectClientInfoArea>
        <ClientInfoTitle>Imperio dos sonhos</ClientInfoTitle>
        <ClientInfoSubtitle>000000000000</ClientInfoSubtitle>
      </SelectClientInfoArea>
    </SelectClientArea>
  );
}
