import {createSlice} from '@reduxjs/toolkit';
import Client from '../../screens/Client/Client';

export interface Client {
  id: string;
  name: string;
  cnpj: string;
  phone: string;
  cep: string;
  state: string;
  city: string;
  district: string;
  address: string;
  number: string;
}

export interface ClientState {
  clients: Client[];
  loading: boolean;
  error: boolean;
}

const initialState: ClientState = {
  clients: [
    {
      id: '0',
      name: 'test',
      cnpj: 'string',
      phone: 'string',
      cep: 'string',
      state: 'string',
      city: 'string',
      district: 'string',
      address: 'string',
      number: 'string',
    },
  ],
  loading: false,
  error: false,
};

const clientSlice = createSlice({
  name: 'client',
  initialState: initialState,
  reducers: {
    setClientData: (state, action) => {
      state.clients = [...state.clients, action.payload];
    },
  },
});

export const {setClientData} = clientSlice.actions;
export const selectClients = (state: {client?: ClientState}) =>
  state.client ? state.client.clients : [];
export default clientSlice.reducer;
