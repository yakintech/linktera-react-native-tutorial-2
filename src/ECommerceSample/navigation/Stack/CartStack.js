import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartMainScreen from '../Screens/cart/CartMainScreen';

const Stack = createNativeStackNavigator();


const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CartMain"
                component={CartMainScreen}
                options={
                    { headerTitle: 'Cart' }
                }
            />
        </Stack.Navigator>
    )
}

export default CartStack