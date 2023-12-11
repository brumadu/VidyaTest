import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../screens/Order/Order';
import Client from '../screens/Client/Client';
import Product from '../screens/Product/Product';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {lightTheme} from '../../ligthTheme';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingBottom: 5, paddingTop: 5, height: 70},
      }}>
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="bag-shopping"
              size={30}
              color={focused ? lightTheme.colors.primaryButton : 'grey'}
            />
          ),
          tabBarLabel: 'Pedidos',
          headerTitleAlign: 'center',
          title: 'Pedidos',
        }}
      />
      <Tab.Screen
        name="Client"
        component={Client}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={30}
              color={focused ? lightTheme.colors.primaryButton : 'grey'}
            />
          ),
          tabBarLabel: 'Clientes',
          headerTitleAlign: 'center',
          title: 'Clientes',
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="shop"
              size={30}
              color={focused ? lightTheme.colors.primaryButton : 'grey'}
            />
          ),
          tabBarLabel: 'Produtos',
          headerTitleAlign: 'center',
          title: 'Produtos',
        }}
      />
    </Tab.Navigator>
  );
}
