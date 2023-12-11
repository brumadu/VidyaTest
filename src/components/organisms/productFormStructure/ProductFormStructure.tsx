import FormField from '../../molecules/formField/FormField';
import ImageUpload from '../../molecules/imageUpload/ImageUpload';

export default function ProductFormStructure() {
  return (
    <>
      <FormField name="Nome"></FormField>
      <FormField name="Preco"></FormField>
      <FormField name="Descricao" isBig={true}></FormField>
      <ImageUpload fieldName="Foto do Produto"></ImageUpload>
    </>
  );
}
