import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CartStack from './src/ECommerceSample/navigation/Stack/CartStack';
import NotificationStack from './src/ECommerceSample/navigation/Stack/NotificationStack';
import ProfileStack from './src/ECommerceSample/navigation/Stack/ProfileStack';
//SafeAreaView IOS uygulamalar özel bir component!
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExampleStack from './src/ECommerceSample/navigation/Stack/ExampleStack';


const Tab = createBottomTabNavigator();


const App = () => {

  return (

    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator>
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
            name="Cart"
            component={CartStack}
            options={
              {
                headerShown: false,
                tabBarIcon: () => <Ionicons size={26} name='cart-outline' />

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
        </Tab.Navigator>

      </SafeAreaView>
    </NavigationContainer>




  )

}


export default App