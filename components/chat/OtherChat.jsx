import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OtherChat = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}> 
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default OtherChat

const styles = StyleSheet.create({
  container:{
    alignSelf:'flex-start',
    backgroundColor:"#FF3333",
    // width:100,
    maxWidth:300,
    borderTopRightRadius:10,
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