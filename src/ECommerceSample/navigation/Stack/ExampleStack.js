import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StateSampleScreen from '../Screens/examples/StateSampleScreen';
import ArrayStateSampleScreen from '../Screens/examples/ArrayStateSampleScreen';
import InputStateSampleScreen from '../Screens/examples/InputStateSampleScreen';
import ElementsListSampleScreen from '../Screens/examples/ElementsListSampleScreen';
import CardSampleScreen from '../Screens/examples/CardSampleScreen';
import PaperDialogSampleScreen from '../Screens/examples/PaperDialogSampleScreen';
import CategoryListScreen from '../Screens/examples/APISample/CategoryListScreen';
import CategoryDetailScreen from '../Screens/examples/APISample/CategoryDetailScreen';
import CategoryAddScreen from '../Screens/examples/APISample/CategoryAddScreen';

const Stack = createNativeStackNavigator();

const ExampleStack = () => {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="CategoryAddSample"
                component={CategoryAddScreen}
            />


            <Stack.Screen
                name="CategoryListSample"
                component={CategoryListScreen}
            />


            <Stack.Screen
                name="CategoryDetailSample"
                component={CategoryDetailScreen}
            />

            <Stack.Screen
                name="PaperDialogSample"
                component={PaperDialogSampleScreen}
            />


            <Stack.Screen
                name="ElementsListSample"
                component={ElementsListSampleScreen}
            />


            <Stack.Screen
                name="CardSample"
                component={CardSampleScreen}
            />

            <Stack.Screen
                name="InputStateSample"
                component={InputStateSampleScreen}
            />
            <Stack.Screen
                name="ArrayStateSample"
                component={ArrayStateSampleScreen}
            />
            <Stack.Screen
                name="StateSample"
                component={StateSampleScreen}
            />

        </Stack.Navigator>
    )
}

export default ExampleStack