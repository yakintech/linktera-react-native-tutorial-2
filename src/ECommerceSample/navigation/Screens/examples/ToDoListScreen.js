import { View, Text } from 'react-native'
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todosReducer } from '../../../store/reducer/todo.reducer';
import { Button, List } from 'react-native-paper';

const ToDoListScreen = () => {

  let toDos = useSelector(state => state);

  let dispatch = useDispatch();

  const deletetodo = (item) => {

    dispatch({type:'REMOVE_TODO', payload: item})

  }
  
  const removeAll = () => {

    dispatch({type:'REMOVE_ALL', payload: {}})

  }

  return (
    <View>
      <Button onPress={() => removeAll()}>Remove All</Button>
      {
        toDos.map((item, key) => {
          return <Fragment key={item.id}><List.Item
            title={item.id}
            description={item.name}
            left={props => <List.Icon {...props} icon="folder" />}
          />
            <Button onPress={() => deletetodo(item)}>Delete</Button>
          </Fragment>
        })
      }
    </View>
  )
}

export default ToDoListScreen