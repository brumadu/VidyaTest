import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';
import ClientForm from '../screens/Client/ClientForm';
import ProductForm from '../screens/Product/ProductForm';
import ClientDetail from '../screens/Client/ClientDetail';
import ProductDetail from '../screens/Product/ProductDetail';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
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
        options={{title: 'Cadastro de cliente'}}
      />
      <Stack.Screen
        name="ClientDetail"
        component={ClientDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{title: 'Cadastro de produto'}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
