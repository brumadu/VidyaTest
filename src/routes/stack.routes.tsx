import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import ClientForm from '../screens/Client/ClientForm';
import ProductForm from '../screens/Product/ProductForm';
import ClientDetail from '../screens/Client/ClientDetail';
import ProductDetail from '../screens/Product/ProductDetail';
import {useRoute} from '@react-navigation/native';
import OrderForm from '../screens/Order/OrderForm';
import OrderSelectClient from '../screens/Order/OrderSelectClient';

const Stack = createNativeStackNavigator();

export default function StackRoutes(this: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClientForm"
        component={ClientForm}
        options={{title: 'Cadastro de cliente', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ClientDetail"
        component={ClientDetail}
        options={({route}) => ({
          //@ts-ignore
          title: route.params.selectedClient.name,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{title: 'Cadastro de produto', headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{title: ''}}
      />
      <Stack.Screen
        name="OrderForm"
        component={OrderForm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderSelectClient"
        component={OrderSelectClient}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
