import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const TemplateSample = () => {
    
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={styles.header}>
                <Text>Friday, 15 Dec</Text>
                <Text>Search</Text>
            </View>

            <View style={styles.title}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Learn</Text>
                <Text>Choose the part of the body</Text>
            </View>


            <View style={[styles.box, styles.box1]}>

                <Text style={styles.boxTitle}>Head / Face</Text>
                <Text style={styles.boxSubTitle}>11 diseases</Text>

            </View>
            <View style={[styles.box, styles.box2]}>
                <Text style={styles.boxTitle}>Back / Neck</Text>
                <Text style={styles.boxSubTitle}>9 diseases</Text>
            </View>
            <View style={[styles.box, styles.box3]}>

                <Text style={styles.boxTitle}>Elbow / Shoulders</Text>
                <Text style={styles.boxSubTitle}>12 diseases</Text>

            </View>
            <View style={[styles.box, styles.box4]}>
                <Text style={styles.boxTitle}>Hand / Arm</Text>
                <Text style={styles.boxSubTitle}>2 diseases</Text>
            </View>
        </View>
    )
}



export default TemplateSample