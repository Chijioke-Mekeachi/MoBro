import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostCard from '../Post/PostCard'
import { fgColor } from '../../SampleData/Color'

const ViewPostonScreen = () => {
  return (
    <View style={styles.container}>
        {/* Show the post on a larger screen */}
      <Text style={styles.BigText}>Recent Post</Text>
      <View style={styles.main}>
      <PostCard/>
      </View>
    </View>
  )
}

export default ViewPostonScreen

const styles = StyleSheet.create({
  BigText:{
    fontSize:20,
    fontWeight:'600',
    color:fgColor,
  },
  container:{
    padding:20,
  },
  main:{
  },
})