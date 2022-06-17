import { View, Text } from 'react-native'
import React from 'react'

const ChildComp2 = (props) => {

  return (
    <View>
      <Text>Product Name: {props.product?.name} </Text>
      <Text>Unit Price: {props.product?.price}</Text>

    </View>
  )
}

export default ChildComp2