import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { categoriesData } from '../../../../data/categoriesData'

const ArrayStateSampleScreen = () => {

    const [categories, setCategories] = useState(categoriesData);


    const clearAll = () => {
        setCategories([]);
    }

    const removeItem = (id) => {

        let newCategories = categories.filter(q => q.id != id);
        setCategories(newCategories)

    }

    return (
        <View>
            <Button title='Clear' onPress={() => clearAll()}></Button>
            {
                categories && categories.map((item, key) => {
                    return <View key={item.id}>
                        <Text style={{fontSize:25}}>{item.name}</Text>
                        <Button title='Remove' onPress={() => removeItem(item.id)}></Button>
                    </View>
                })
            }
        </View>
    )
}

export default ArrayStateSampleScreen