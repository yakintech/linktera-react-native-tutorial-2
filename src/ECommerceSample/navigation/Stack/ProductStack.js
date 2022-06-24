import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ProductDetailScreen from '../Screens/product/ProductDetailScreen';
import ProductMainScreen from '../Screens/product/ProductMainScreen';

const Stack = createNativeStackNavigator();


const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProductMain"
                component={ProductMainScreen}
                options={
                    { headerTitle: 'Products' }
                }
            />

            <Stack.Screen
                name="ProductDetail"
                component={ProductDetailScreen}
                options={
                    { headerTitle: 'Products' }
                }
            />
        </Stack.Navigator>
    )
}

export default ProductStack