import { View, Text, Button } from 'react-native'
import React from 'react'
import { categoriesData } from '../data/categoriesData'

const CategoryListScreen = ({navigation}) => {

    
    const goToDetail = (item) => {

       navigation.navigate("CategoryDetail", {
           id: item.id,
           name: item.name,
           description: item.description
       })

    }


  return (
    <View>
        {
            categoriesData && categoriesData.map((item,key) => {
              return  <Button onPress={() => goToDetail(item)} key={key} title={item.name}></Button>
            })
        }
    </View>
  )
}

export default CategoryListScreen