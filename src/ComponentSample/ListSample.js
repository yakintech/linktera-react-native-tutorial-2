import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ListSample = () => {

  let name = "Çağatay"

  let countries = ['Türkiye', 'Almanya', 'ABD', 'Rusya', 'İran', 'Fransa', 'Yunanistan','Türkiye', 'Almanya', 'ABD', 'Rusya', 'İran', 'Fransa', 'Yunanistan','Türkiye', 'Almanya', 'ABD', 'Rusya', 'İran', 'Fransa', 'Yunanistan']

  return (
    <ScrollView>
      <Text>{name}</Text>

      {
        countries.map((item, index) => <Text style={{fontSize: 35, fontWeight:'bold'}} key={index}>{item}</Text>)
      }

    </ScrollView>
  )
}

export default ListSample