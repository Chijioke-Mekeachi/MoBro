import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const StyleButton = ({Theight, top, text="Shop now", width}) => {
    return (
        <TouchableOpacity style={[styles.tranceBotton,{height: Theight},{top: top}, {width: width}]}>
            <Text style={[{ color: '#ffffff' },{textAlign:'center'},{alignSelf:'center'}]}>{text}</Text><MaterialCommunityIcons name='arrow-right' size={24} color={'#FFFFFF'} style={styles.ico} />
        </TouchableOpacity>
    )
}

export default StyleButton

const styles = StyleSheet.create({
    tranceBotton:{
        borderWidth:1,
        width:'35%',
        borderColor:'#FFFFFF',
        textAlign:'center',
        alignContent:'center',
        padding:5,
        justifyContent:'space-between',
        flexDirection:'row',
        borderRadius:5
    },
    ico:{
        alignSelf:'center',
    }
})