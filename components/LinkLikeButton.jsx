import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { btnColor, fgColor, lnColor, paginationColor } from '../SampleData/Color'

const LinkLikeButton = ({text, onpress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.Link} onPress={onpress}>
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LinkLikeButton

const styles = StyleSheet.create({
    linkText:{
        color:paginationColor,
        fontWeight:'600',
        textAlign:'center',
        top:9,
    },
})