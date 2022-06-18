import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { suppliersData } from '../../../../data/suppliersData'
import { ListItem } from '@rneui/base';

const ElementsListSampleScreen = ({ navigation }) => {

  const [suppliers, setSuppliers] = useState(suppliersData);

  return (
    <ScrollView>
      {
        suppliers && suppliers.map((item, index) => {
          return <ListItem
            onPress={() => navigation.navigate("CardSample", { supplier: item })} key={index}
            bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.companyName}</ListItem.Title>
              <ListItem.Subtitle>{item.contactName}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        })
      }
    </ScrollView>
  )
}

export default ElementsListSampleScreen