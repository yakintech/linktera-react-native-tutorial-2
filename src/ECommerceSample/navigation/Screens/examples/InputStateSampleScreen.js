import { View, Text, FlatList, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { categoriesData } from '../../../../data/categoriesData'
const InputStateSampleScreen = () => {

    const [categories, setCategories] = useState(categoriesData);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const removeCategory = (id) => {

        let newCategories = categories.filter(q => q.id != id);

        setCategories(newCategories);

    }

    const renderCategory = ({ item }) => {

        return <>
            <Pressable onPress={() => removeCategory(item.id)}>
                <Text style={{ fontSize: 20 }}>{item.name} - {item.description}</Text>
            </Pressable>
        </>

    }


    const addNewCategory = () => {

        let randomId = Math.floor(Math.random() * 1000);
        let newCategory = {
            id: randomId,
            name: name,
            description: description
        }

        setCategories([...categories, newCategory])

    }

    const removeAll = () => {
        setCategories([]);
    }


    return (
        <>
            <View>
                <Text style={{fontSize:20}}>Categories Length: {categories.length}</Text>
            </View>
            <View>
                <Button onPress={() => removeAll()} title='Remove All'></Button>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Name'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    placeholder='Description'
                />

                <Button title='Add' onPress={() => addNewCategory()}></Button>
            </View>
            <View>
                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id}
                >

                </FlatList>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});


export default InputStateSampleScreen