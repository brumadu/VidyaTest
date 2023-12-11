import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={TabRoutes} />
    </Stack.Navigator>
  );
}
