import * as yup from 'yup';

export const YupPersonSchema = yup.object({
  name: yup.string().required('Campo necessario: nome'),
  cnpj: yup
    .string()
    .length(14, 'CNPJ necessita de 14 digitos')
    .required('Campo necessario: cnpj'),
  phone: yup
    .string()
    .min(8, 'Telefone necessita no minimo 8 digitos')
    .required('Campo necessario: Telefone'),
  cep: yup
    .string()
    .length(8, 'CEP necessita de 8 digitos')
    .required('Campo necessario: Cep'),
  state: yup.string().required('Campo necessario: Estado'),
  city: yup.string().required('Campo necessario: Cidade'),
  district: yup.string().required('Campo necessario: Bairro'),
  address: yup.string().required('Campo necessario: Endereço'),
  number: yup.number().required('Campo necessario: Número'),
});
