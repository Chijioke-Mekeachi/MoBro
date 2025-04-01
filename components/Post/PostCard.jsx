import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PostWithImgAndText } from '../../SampleData/DummyPost';
import ProfileOnPost from './ProfileOnPost';
import LikeComment from './LikeComment';

const PostCard = ({img=false}) => {
  return (
    <View style={styles.container}>
        {PostWithImgAndText.map((post,index) => (
        <View key={index} style={styles.Imag_text}>
            <ProfileOnPost img={post.userPhoto} user={post.user}/>
                <Image source={post.img} style={styles.img}/>
                <View style={styles.color_back_post}>
                    <Text style={styles.ColorText}>{post.text}</Text>
                    <LikeComment postid={post.id}/>
                </View>
        </View>
        ))}
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 20,
    width: '100%',
    alignContent: 'center',
    borderRadius:10,
    gap:50,
  },
  img:{
    width:'100%',
    height:400,
  },
  space:{
    height:20,
    backgroundColor:'#FEFEFE',
  },
  ColorText:{
    textAlign:'left',
    padding:20,
    width:"94%",
    fontSize:17,
    fontWeight:'500'
  },
  color_back_post:{
    backgroundColor:'#FFFFFF',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
})