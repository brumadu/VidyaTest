import {combineReducers, configureStore} from '@reduxjs/toolkit';
import clientSlice from './reducers/Client.store';
import orderSlice from './reducers/Order.store';
import productSlice from './reducers/Product.store';

const rootReducer = combineReducers({
  client: clientSlice,
  order: orderSlice,
  product: productSlice,
});

const store = configureStore({
  reducer: {
    order: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
