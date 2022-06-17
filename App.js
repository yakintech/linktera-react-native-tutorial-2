import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ListSample from './src/ComponentSample/ListSample'
import FlatListSample from './src/CoreComponents/FlatListSample'
import ImgSample from './src/CoreComponents/ImgSample'
import SectionListSample from './src/CoreComponents/SectionListSample'
import FlexSample from './src/ReactNativeStyling/FlexSample'
import TemplateSample from './src/ReactNativeStyling/template1/TemplateSample'


//SafeAreaView IOS uygulamalar özel bir component!
const App = () => {

  return (<SafeAreaView style={{flex:1}}>
    <TemplateSample />
  </SafeAreaView>)

}


export default App