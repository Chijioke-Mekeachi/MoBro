import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fgColor } from '../SampleData/Color'

const PhotoRoll = ({ valueObj }) => {
    return (

        <ScrollView style={styles.Scroll}>
            <View style={styles.container}>
                {valueObj.map((value, index) => (
                    <TouchableOpacity key={index} style={styles.imgHolder} onPress={value.onPress}>
                        <Image source={value.img} style={styles.img} />
                        <Text style={styles.desText}>{value.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

export default PhotoRoll

const styles = StyleSheet.create({
    desText: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '400',
        color:fgColor,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 100
    },
    imgHolder: {
        textAlign: 'center'
    },
    Scroll: {
        flexDirection: 'row',
    },
    container: {
        flexDirection: 'row',
        gap: 20,
    },
})