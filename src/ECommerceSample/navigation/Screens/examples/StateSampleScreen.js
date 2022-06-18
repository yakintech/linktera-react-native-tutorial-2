import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const StateSampleScreen = () => {

    //name değişkenimin adı
    //setName değişkeni DEĞİŞTİRECEK TEK ARKADAŞ (STATE GÜNCELLEYECEK)
    const [name, setName ] = useState('Çağatay')

    console.log('State Sample Screen Component rendered!!');

    const changeName = () => {
        setName('Aykut');
    }

    return (
        <View>
            <Text>{name}</Text>
            <Button onPress={() => changeName()} title='Change Name'></Button>
        </View>
    )
}

export default StateSampleScreen