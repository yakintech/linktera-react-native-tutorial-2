import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CartStack from './src/ECommerceSample/navigation/Stack/CartStack';
import NotificationStack from './src/ECommerceSample/navigation/Stack/NotificationStack';
import ProfileStack from './src/ECommerceSample/navigation/Stack/ProfileStack';
//SafeAreaView IOS uygulamalar özel bir component!
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExampleStack from './src/ECommerceSample/navigation/Stack/ExampleStack';
import ProductStack from './src/ECommerceSample/navigation/Stack/ProductStack';
import { cartContext, CartProvider } from './src/ECommerceSample/store/cartContext';
import TabIndex from './src/ECommerceSample/navigation/TabIndex';


const App = () => {

  return (
    <CartProvider>
      <NavigationContainer>

        <SafeAreaView style={{ flex: 1 }}>
         <TabIndex/>
        </SafeAreaView>


      </NavigationContainer>
    </CartProvider>







  )

}


export default App