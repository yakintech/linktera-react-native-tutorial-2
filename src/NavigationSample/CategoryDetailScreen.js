import { View, Text, Button } from 'react-native'
import React from 'react'

const CategoryDetailScreen = ({ route, navigation }) => {

    const { name, description, id } = route.params

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:20}}>Id: {id}</Text>
            <Text style={{fontSize:20}}>Name: {name}</Text>
            <Text style={{fontSize:20}}>Description: {description}</Text>
            {/* <Button title='Go to Gome' onPress={() => navigation.navigate("About")}></Button> */}
        </View>
    )
}

export default CategoryDetailScreen