import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DiscriptionFullView = ({longDec,BigText, shorDescription}) => {
  return (
    <View style={styles.container2}>
      <Text style={styles.BigText}>{BigText}</Text>
      <Text style={shorDescription}>{shorDescription}</Text>
      <View>
        <View style={styles.star}>
            <MaterialCommunityIcons name='star' size={24} color={"gold"}/>
            <MaterialCommunityIcons name='star' size={24} color={"gold"}/>
            <MaterialCommunityIcons name='star' size={24} color={"gold"}/>
            <MaterialCommunityIcons name='star' size={24} color={"gold"}/>
            <MaterialCommunityIcons name='star' size={24} color={"grey"}/>
        </View>
        <View style={styles.Price}></View>
      </View>
      <Text>Product Details</Text>
      <Text style={styles.longDes}>{longDec}</Text>
    </View>
  )
}

export default DiscriptionFullView

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        width: '100%',
        height:"0%",
        alignContent: 'center',
    }
})