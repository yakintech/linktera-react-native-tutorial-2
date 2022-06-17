import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'



const PressableSample = () => {

    const textPress = () => {
        alert('Text press!')
    }

    const touchablePress = () => {
        alert("touchble press!!")
    }

    return (
        <View>
            <Text onPress={() => textPress()}>Text Press</Text>

            <Pressable onPress={() => touchablePress()}>
                <View>
                    <Text>Presseble Sample</Text>
                    <Image
                        style={{width:50, height:50}}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
            </Pressable>


            {/* <TouchableOpacity onPress={() => touchablePress()}>
                <View>
                    <Text>Presseble Sample</Text>
                    <Image
                        style={{width:50, height:50}}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
            </TouchableOpacity> */}

        </View>
    )
}

export default PressableSample