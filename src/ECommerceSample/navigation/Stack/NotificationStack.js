import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationMainScreen from '../Screens/notification/NotificationMainScreen';

const Stack = createNativeStackNavigator();


const NotificationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NotificationMain"
                component={NotificationMainScreen}
                options={
                    { headerTitle: 'Notification' }
                }
            />
        </Stack.Navigator>
    )
}

export default NotificationStack