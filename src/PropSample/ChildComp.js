import { View, Text } from 'react-native'
import React from 'react'

//props anahtar kelimesi ile gelen propertyileri(parametreleri) sarmalladım!

const ChildComp = (props) => {

  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Surname: {props.surname}</Text>
      <Text>Year: {props.year}</Text>
    </View>
  )

}

export default ChildComp