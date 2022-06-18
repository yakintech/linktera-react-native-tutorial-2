import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

    const goToAbout = () => {

        navigation.navigate("About")

    }

  return (
    <View>
      <Text>Home Screen</Text>

      <Button title='Go To About' onPress={() => goToAbout()}></Button>

      <Button title='Go To Category List' onPress={() => navigation.navigate("CategoryList")}></Button>

    </View>
  )
}

export default HomeScreen