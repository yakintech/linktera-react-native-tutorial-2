import { View, Text, SectionList, ActivityIndicator } from 'react-native'
import React from 'react'


const SectionListSample = () => {

    const countires = [
        {
            title: 'Türkiye',
            data: ['İzmir', 'İstanbul', 'Ankara']
        },
        {
            title: 'Almanya',
            data: ['Frankurt', 'Hanoven', 'Berlin', 'Münih']
        },
        {
            title: 'İngiltere',
            data: ['Londra', 'Manchester']
        },
        {
            title: 'Fransa',
            data: ['Paris', 'Lille', 'Nice']
        }
    ]

    const renderCountry = ({item}) => {
        return <Text style={{fontSize:20, fontWeight:'bold'}}>{item}</Text>
    }

  return (
    <View>
              <ActivityIndicator size='large'/>
            <SectionList
                sections={countires}
                renderItem={renderCountry}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{fontSize:35, color:'tomato'}}>{title}</Text>
                  )}
            >

            </SectionList>
    </View>
  )
}

export default SectionListSample