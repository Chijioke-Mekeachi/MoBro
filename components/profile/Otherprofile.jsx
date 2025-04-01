import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Users } from '../../SampleData/DummyUser'
import { num } from '../../screens/SignInScreen'
const Otherprofile = () => {

  return (
    <View style={styles.container}>
      <View style={styles.photo_secrtion}>
      <Image source={Users[num].profilePhoto} style={styles.photo}/>
      </View>
      <View style={styles.text_section}>
        <Text style={styles.name}>{Users[num].FullName}</Text>
        
        <View style={styles.low_sect}>
        <Text style={styles.list}>Username: <Text style={styles.name}>{Users[num].UName}</Text></Text>
        <Text style={styles.list}>Class: <Text style={styles.name}>{Users[num].class}</Text></Text>
        </View>
      </View>
    </View>
  )
}

export default Otherprofile

const styles = StyleSheet.create({
  photo:{
    width:100,
    height:100,
    borderRadius:20,
    borderWidth:5,
    borderColor:'#ABABAB'
  },
  photo_secrtion:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    padding:25,
  },
  name:{
    fontWeight:'600',
    fontSize:30,
    fontFamily:'arial',
    justifyContent:'center',
    textAlign:'center',
    width:'100%',
    color:'#000'
  },
  list:{
    fontSize:20,
    color:'#00AADD',

  },
  text_section:{
    gap:"25%",
  },
  low_sect:{
    padding:20,
  }
})