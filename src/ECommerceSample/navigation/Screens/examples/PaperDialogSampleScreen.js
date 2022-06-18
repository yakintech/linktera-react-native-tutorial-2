import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Dialog, Portal, Button } from 'react-native-paper'

const PaperDialogSampleScreen = () => {

  const [visible, setvisible] = useState(false)


  return (
    <>
<Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </>
  )
}

export default PaperDialogSampleScreen