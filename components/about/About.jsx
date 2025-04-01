import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const About = () => {
  return (
    <View style={styles.contain}>
      <Text style={styles.title}> About Us <MaterialCommunityIcons name={'heart-box'} size={24} color={'red'}/></Text>
      <View style={styles.body}>
        <Text style={styles.body_text}>
            Imagine you're in a school, and there are many teachers, students, and staff members. Someone needs to make sure everything runs smoothly, that teachers are teaching well, students are learning, and the school is safe and clean. That someone is the school administrator!
        </Text>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    contain:{
        padding:20,
        gap:50,
    },
    title:{
        fontSize:24,
        alignSelf:'center',
        fontWeight:'500',
    },
    body_text:{
        width:'100%',
    }
})