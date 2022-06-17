import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
//Proptypes kütüphanesi ile componentin property lerine default tiplerini belirttim

const ChildComp5 = (props) => {
  return (
    <View>
      <Text>Name: {props.name}</Text>
      <Text>Eye Color: {props.eyeColor}</Text>
      <Text>Age: {props.age}</Text>

    </View>
  )
}

ChildComp5.defaultProps = {
    name: "Rahul",
    eyeColor: "deepblue",
    age: 45
  }

  ChildComp5.propTypes = {
      name: PropTypes.string,
      age : PropTypes.number
  }
    
export default ChildComp5