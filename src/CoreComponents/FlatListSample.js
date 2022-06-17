import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { suppliersData } from '../data/suppliersData'



const FlatListSample = () => {

    const renderSupplierItem = ({item}) => {

        return <Text style={{fontSize:35, fontWeight:'bold'}}>{item.id} - {item.contactName}</Text>

    }

    return (
        <View>
            <FlatList
                data={suppliersData}
                renderItem={renderSupplierItem}
                initialScrollIndex={11}
            >

            </FlatList>
        </View>
    )
}

export default FlatListSample