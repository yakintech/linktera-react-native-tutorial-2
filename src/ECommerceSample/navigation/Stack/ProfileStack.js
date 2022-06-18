import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileMainScreen from '../Screens/profile/ProfileMainScreen';
import ProfileUpdateScreen from '../Screens/profile/ProfileUpdateScreen';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="ProfileMain"
        component={ProfileMainScreen}
        options={
          { headerTitle: 'Profile' }
      }
      />


     <Stack.Screen
        name="ProfileUpdate"
        component={ProfileUpdateScreen}
        options={
          { headerTitle: 'Profile Update' }
      }
      />

    </Stack.Navigator>
  )
}

export default ProfileStack