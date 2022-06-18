import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AboutScreen from './src/NavigationSample/AboutScreen';
import CategoryDetailScreen from './src/NavigationSample/CategoryDetailScreen';
import CategoryListScreen from './src/NavigationSample/CategoryListScreen';
import ContactScreen from './src/NavigationSample/ContactScreen';
import HomeScreen from './src/NavigationSample/HomeScreen';
//SafeAreaView IOS uygulamalar özel bir component!

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={
              {
                headerTitle: 'Anasayfa',
                headerStyle: {
                  // backgroundColor:'tomato'
                }
              }
            }
          />
          <Stack.Screen name="About"
            component={AboutScreen}
            options={
              {
                headerBackTitle:'Geri',
              }
            }
          />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="CategoryList" component={CategoryListScreen} />
          <Stack.Screen 
          name="CategoryDetail"
          component={CategoryDetailScreen}
          options={({ route }) => ({
            // headerTitle: () => <Text>{route.params.name}</Text>
            headerTitle: route.params.name

            
          })}
            />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>




  )

}


export default App