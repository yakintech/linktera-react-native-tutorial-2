import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import CartStack from './Stack/CartStack'
import ExampleStack from './Stack/ExampleStack'
import NotificationStack from './Stack/NotificationStack'
import ProductStack from './Stack/ProductStack'
import ProfileStack from './Stack/ProfileStack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cartContext } from '../store/cartContext'


const Tab = createBottomTabNavigator();




function TabIndex() {
    
    const { cart } = useContext(cartContext)

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Example"
                component={ExampleStack}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: () => <Ionicons size={26} name='book-outline' />

                    }
                }
            />


            <Tab.Screen
                name="Products"
                component={ProductStack}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: () => <Ionicons size={26} name='fast-food-outline' />
                    }
                }
            />

            <Tab.Screen
                name="Cart"
                component={CartStack}

                options={
                    {
                        tabBarBadge: cart.length,
                        headerShown: false,
                        tabBarIcon: () => <Ionicons size={26} name='cart-outline' />

                    }
                }
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: () => <Ionicons size={26} name='notifications-outline' />
                    }
                }
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={
                    {
                        headerShown: false,
                        tabBarIcon: () => <Ionicons size={26} name='person-outline' />

                    }
                }
            />


        </Tab.Navigator>
    )
}

export default TabIndex