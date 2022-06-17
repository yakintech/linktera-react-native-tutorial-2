import { View, Text } from 'react-native'
import React from 'react'
import ChildComp from './ChildComp'
import ChildComp2 from './ChildComp2'
import ChildComp3 from './ChildComp3'
import ChildComp4 from './ChildComp4'
import ChildComp5 from './ChildComp5'
import PropFunctionSample from './PropFunctionSample'
import PressableSample from '../CoreComponents/PressableSample'

const ParentComp = () => {

  let productDetail = {
    name: 'IPhone',
    price: 5000
  }


  const clickSample = () => {
    alert('Click Parent Comp!')
  }

  return (
    <View>
      <PressableSample/>
      {/* <PropFunctionSample clickMe={clickSample}/> */}
      {/* <Text>Paren Comp</Text> */}
      {/* <ChildComp5 /> */}
      {/* <ChildComp4 surname='Yıldız'/> */}
      {/* <ChildComp3 name='Çağatay' surname='Yıldız' /> */}
      {/* <ChildComp name='Çağatay' surname='Yıldız' year={2022} />
      <ChildComp2  product={productDetail}/> */}
    </View>
  )
}

export default ParentComp