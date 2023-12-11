import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../screens/Order/Order';
import Client from '../screens/Client/Client';
import Product from '../screens/Product/Product';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingBottom: 15, paddingTop: 5, height: '8%'},
      }}>
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: () => <Icon name="bag-shopping" size={30} />,
          tabBarLabel: 'Pedidos',
        }}
      />
      <Tab.Screen
        name="Client"
        component={Client}
        options={{
          tabBarIcon: () => <Icon name="user" size={30} />,
          tabBarLabel: 'Clientes',
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: () => <Icon name="shop" size={30} />,
          tabBarLabel: 'Produtos',
        }}
      />
    </Tab.Navigator>
  );
}
