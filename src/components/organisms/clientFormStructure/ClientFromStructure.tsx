import Button from '../../atoms/button/Button';
import FormField from '../../molecules/formField/FormField';

export default function FormStructure({navigation}: any) {
  return (
    <>
      <FormField name="Nome"></FormField>
      <FormField name="CNPJ"></FormField>
      <FormField name="Telefone"></FormField>
      <FormField name="CEP"></FormField>
      <FormField name="Estado"></FormField>
      <FormField name="Cidade"></FormField>
      <FormField name="Bairro"></FormField>
      <FormField name="Endereço"></FormField>
      <FormField name="Numero"></FormField>
      <Button
        buttonName="Salvar"
        onPress={() => navigation.navigate('Client')}></Button>
    </>
  );
}
