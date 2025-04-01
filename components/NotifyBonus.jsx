import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StyleButton from './StyleButton'

const NotifyBonus = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Bigtext}>Deal of the Day</Text>
        <View style={styles.ContLow}>
          <MaterialCommunityIcons name='alarm' size={24} color={'white'} />
          <Text style={styles.smallText}>22h 55m 20s remaining </Text>
        </View>
      </View>
      <StyleButton Theight={40} top={7} text='View All' width={110}/>
    </View>
  )
}

export default NotifyBonus

const styles = StyleSheet.create({
  container: {
    bottom: 500,
    backgroundColor: '#4392F9',
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent:'space-between',
    padding:10,
  },
  ContLow:{
    flexDirection:'row',
    gap:5
  },
  smallText:{
    fontSize:14,
    fontWeight:'400',
    color:'#FFFFFF'
  },
  Bigtext:{
    fontSize:20,
    fontWeight:'600',
    color:'#FFFFFF'
  }
})