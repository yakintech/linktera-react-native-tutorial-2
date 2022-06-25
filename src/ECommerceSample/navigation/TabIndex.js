import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext, useEffect } from 'react'
import CartStack from './Stack/CartStack'
import ExampleStack from './Stack/ExampleStack'
import NotificationStack from './Stack/NotificationStack'
import ProductStack from './Stack/ProductStack'
import ProfileStack from './Stack/ProfileStack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cartContext } from '../store/cartContext'
import { getCartStore } from '../service/storage/cartStorage'
import { useSelector } from 'react-redux'


const Tab = createBottomTabNavigator();

function TabIndex() {


    const { cart, setCart } = useContext(cartContext)

    const todos = useSelector(todos => todos);

    console.log("TODOS", todos);

    useEffect(() => {

        getCartStore()
            .then((data) => {
                console.log('DATA', data);
                if (data)
                    setCart(data)
            })

    }, [])

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Example"
                component={ExampleStack}
                options={
                    {
                        tabBarBadge: todos.length,
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