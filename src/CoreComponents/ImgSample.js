import { View, Text, Image } from 'react-native'
import React from 'react'

const ImgSample = () => {

    let imgStyle = {
        width: 50,
        height: 50
    }

    return (
        <View>
            <Image
                style={imgStyle}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    )
}

export default ImgSample

//<p style='margin-left:20px'>Hello Html</p>