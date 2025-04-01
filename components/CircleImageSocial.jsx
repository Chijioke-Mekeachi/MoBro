import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CircleImageSocial = ({image, onpress = ()=>{}}) => {
  return (
    
    <TouchableOpacity style={styles.cirle} onPress={onpress}>
        <Image source={image}/>
    </TouchableOpacity>
  )
}

export default CircleImageSocial

const styles = StyleSheet.create({
  cirle:{
    borderRadius:'100%',
    width:45,
    height:45,
    backgroundColor:'#FCF3F6',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#999999'
  }
})