import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux';

const AddToDoScreen = ({navigation}) => {

  const [name, setName] = useState('');

  const dispatch = useDispatch()


  const addNewTodo = () => {

    let randomId = Math.floor(Math.random() * 100);

    let newTodo = {
      id: randomId,
      name: name
    }

    dispatch({ type: 'ADD_TODO', payload: newTodo })
    setName('')
    navigation.navigate("ToDoList")

  }

  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={{
          height: 60,
           margin: 12,
          padding: 10,
        }}
      />

      <Button onPress={() => addNewTodo()}>Add</Button>
    </View>
  )
}

export default AddToDoScreen