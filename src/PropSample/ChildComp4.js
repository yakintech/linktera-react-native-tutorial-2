import { View, Text } from 'react-native'
import React from 'react'

const ChildComp4 = ({name = "Çağatay", surname}) => {

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Surname: {surname}</Text>
    </View>
  )
}

export default ChildComp4