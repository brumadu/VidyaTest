import * as yup from 'yup';

export const YupProductSchema = yup.object({
  name: yup.string().required('Campo necessario: Produto'),
  price: yup.number().required('Campo necessario: Price'),
  description: yup.string().required('Campo necessario: Descrição'),
  productPhoto: yup.string().required('Campo necessario: Foto'),
});
