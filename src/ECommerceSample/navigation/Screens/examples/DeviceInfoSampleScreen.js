import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeviceInfo from 'react-native-device-info'


const DeviceInfoSampleScreen = () => {
    const [storage, setStorage] = useState(null);

    let systemVersion = DeviceInfo.getSystemVersion();

    useEffect(() => {
      
        DeviceInfo.getFreeDiskStorage()
        .then((data) => {
            setStorage(data)
        })

    }, [])
    

  return (
    <View>
      <Text>Storage: {storage}</Text>
      <Text>System Version: {systemVersion}</Text>

    </View>
  )
}

export default DeviceInfoSampleScreen