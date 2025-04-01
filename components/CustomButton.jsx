import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native'
import React from 'react';

const CustomButton = ({title, onPress, backgroundColor, textColor,Width, borderWidth, borderColor, style, buttonStyle }) => {
  return (
      <TouchableOpacity style={[{width: Width}, styles.button, buttonStyle, {backgroundColor: backgroundColor || 'transparent', borderWidth: borderWidth || 0, borderColor: borderColor || 'transparent'}]} onPress={onPress} >
        <Text style={[styles.textStyle, {color: textColor}]}>{title}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        paddingVertical: 14,
        borderRadius: 5,
        marginTop:10,
        alignItems:'center',
        alignSelf:'center',
        // top:60,
    },
    textStyle:{
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})