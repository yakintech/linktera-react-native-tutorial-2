import { View, Text } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base';

const CardSampleScreen = ({ route }) => {

  const { supplier } = route.params;

  return (
    <View>
      <Card>
        <Card.Title>{supplier.companyName}</Card.Title>
        <Card.Divider />
        <View>
          <Text>{supplier.contactName}</Text>
          <Text>{supplier.contactTitle}</Text>

        </View>
      </Card>
    </View>
  )
}

export default CardSampleScreen