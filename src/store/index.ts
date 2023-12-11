import {combineReducers, configureStore} from '@reduxjs/toolkit';
import clientSlice from './reducers/Client.store';

const rootReducer = combineReducers({
  client: clientSlice,
});

const store = configureStore({
  reducer: {
    order: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
