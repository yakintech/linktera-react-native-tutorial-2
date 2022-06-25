import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
//SafeAreaView IOS uygulamalar özel bir component!
import { CartProvider } from './src/ECommerceSample/store/cartContext';
import TabIndex from './src/ECommerceSample/navigation/TabIndex';
import { createStore } from 'redux';
import { todosReducer } from './src/ECommerceSample/store/reducer/todo.reducer';
import { Provider } from 'react-redux';


const App = () => {


  const todoStore = createStore(todosReducer);

  return (
    <Provider store={todoStore}>
      <CartProvider>
        <NavigationContainer>

          <SafeAreaView style={{ flex: 1 }}>
            <TabIndex />
          </SafeAreaView>


        </NavigationContainer>
      </CartProvider>
    </Provider>








  )

}


export default App