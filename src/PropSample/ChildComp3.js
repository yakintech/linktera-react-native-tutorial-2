import { View, Text } from 'react-native'
import React from 'react'

const ChildComp3 = (props) => {

    const { name, surname } = props

    return (
        <View>
            <Text>Name: {name}</Text>
            <Text>Surname: {surname}</Text>

        </View>
    )
}

export default ChildComp3