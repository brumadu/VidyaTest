import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
}
