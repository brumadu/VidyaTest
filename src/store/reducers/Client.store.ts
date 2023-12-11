import {createSlice} from '@reduxjs/toolkit';
import Client from '../../screens/Client/Client';
import {useSelector} from 'react-redux';
import {RootState} from '..';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {getRealmInstance} from '../../services/realm';
import { fetchClients } from '../../services/realm/client/FetchClient';

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

export interface clientProps {
  client: Client;
}

export interface ClientState {
  clients: Client[];
  loading: boolean;
  error: boolean;
}

const clients = fetchClients()

const initialState: ClientState = {
  clients: (clients || []).map(client => ({
    id: (client?.id || '') as string,
    name: (client?.name || '') as string,
    cnpj: (client?.cnpj || '') as string,
    phone: (client?.phone || '') as string,
    cep: (client?.cep || '') as string,
    state: (client?.state || '') as string,
    city: (client?.city || '') as string,
    district: (client?.district || '') as string,
    address: (client?.address || '') as string,
    number: (client?.number || '') as string,
  })),
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
