import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Client from "../screens/Client";
import Order from "../screens/Order";
import Product from "../screens/Product";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Client" component={Client} />
                <Tab.Screen name="Order" component={Order} />
                <Tab.Screen name="Product" component={Product} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}