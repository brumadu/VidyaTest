import {createSlice} from '@reduxjs/toolkit';
import Client from '../../screens/Client/Client';
import {useSelector} from 'react-redux';
import {RootState} from '..';

export interface clientProps {
  client: Client;
}

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
      id: 'number',
      name: 'string',
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

export const useClientSelect = () =>
  useSelector((state: RootState) => state.slice.client);

export const {setClientData} = clientSlice.actions;
export default clientSlice.reducer;
