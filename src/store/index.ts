import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import clientSlice from './reducers/Client.store';
import orderSlice from './reducers/Order.store';
import productSlice from './reducers/Product.store';

const rootReducer = combineReducers({
  client: clientSlice,
  order: orderSlice,
  product: productSlice,
});

const middlewares: any[] = [];

const store = configureStore({
  reducer: {
    slice: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
