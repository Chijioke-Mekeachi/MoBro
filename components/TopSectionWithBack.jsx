import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const TopSectionWithBack = ({ text, Sname, onpress }) => {
    const navigation =  useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={onpress}>
                <MaterialCommunityIcons name='arrow-left' size={24} color={"#FA7189"} />
            </TouchableOpacity>
            <Text style={styles.midText}>{text}</Text>
            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name={Sname} size={24} color={"#FA7189"} />
            </TouchableOpacity>
        </View>
    )
}

export default TopSectionWithBack

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor:"#FFFFFF"
    },
    btn:{
        backgroundColor:"#FFFFFF",
        borderRadius:100,
        height:40,
        width:40,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    midText:{
        fontSize:20,
        fontWeight:'700',
        textAlign:'center',
        justifyContent:'center',
    }
})