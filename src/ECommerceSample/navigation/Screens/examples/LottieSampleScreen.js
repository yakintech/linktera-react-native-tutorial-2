import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import Lottie from 'lottie-react-native';
import { Button } from 'react-native-paper';

const LottieSampleScreen = () => {

    let lottieRef = useRef();

    const run = () => {
        lottieRef.current.play();
    }

    const pause = () => {
        lottieRef.current.pause();
    }

    return (
        <View style={{ flex: 1 }}>
            <Lottie ref={lottieRef} style={{flex:1}} source={require('./../../110304-popeye.json')}  />

            <Button onPress={() => run()}>Run</Button>
            <Button onPress={() => pause()}>Pause</Button>
        </View>
    )
}

export default LottieSampleScreen