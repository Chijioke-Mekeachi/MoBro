import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { chatColor } from '../../SampleData/Color'

const MyChat = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default MyChat

const styles = StyleSheet.create({
  container:{
    // MarginTop:100,
    alignSelf:'flex-end',
    backgroundColor:chatColor,
    // width:100,
    maxWidth:300,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
  main:{
    padding:10,
  },
  text:{
    fontSize:14,
    fontWeight:400,
    color:'#FFFFFF',
  },
})