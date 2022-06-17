import { View, Text, Button } from 'react-native'
import React from 'react'

const PropFunctionSample = (props) => {

    const helloButton = () => {
        alert("Hello!")
    }

    return (
        <View>
            <Button title='Click Me!' onPress={() => props.clickMe()}></Button>
            <Button title='Hello' onPress={() => helloButton()}></Button>
        </View>
    )
}

export default PropFunctionSample