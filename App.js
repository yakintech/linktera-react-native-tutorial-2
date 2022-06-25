import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
//SafeAreaView IOS uygulamalar özel bir component!
import { CartProvider } from './src/ECommerceSample/store/cartContext';
import TabIndex from './src/ECommerceSample/navigation/TabIndex';

const App = () => {


  return (
    <CartProvider>
      <NavigationContainer>

        <SafeAreaView style={{ flex: 1 }}>
          <TabIndex />
        </SafeAreaView>


      </NavigationContainer>
    </CartProvider>







  )

}


export default App