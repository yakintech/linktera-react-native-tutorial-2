import { View, Text } from 'react-native'
import React from 'react'

//Kapsayıcının flex inin 1 birim olması demek child lara flex uygulanacağı anlamına geliyor.
//flexDirection default olarak column
// flexDirection row ise justifyContent row tarafında kutuların yerleşimini organize eder. 
// flexDirection row ise alignITems column tarafında kutuların yerleşimini organize eder.

const FlexSample = () => {
  return (
    <>
        <View style={{backgroundColor:'tomato', flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text>Text-1</Text>
            <Text>Text-2</Text>
        </View>
        <View  style={{backgroundColor:'yellow', flex:1}}></View>
        <View  style={{backgroundColor:'aqua', flex:2}}></View>
    </>
  )
}

export default FlexSample