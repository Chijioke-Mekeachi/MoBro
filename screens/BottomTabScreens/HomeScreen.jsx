import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import TopSection from '../../components/TopSection';
import SearchIconBar from '../../components/SearchIconBar';
import ViewPostonScreen from '../../components/Post/ViewPostonScreen';
import PostCard from '../../components/Post/PostCard';
import { Users } from '../../SampleData/DummyUser';
import { bgColor, Color, lnColor, paginationColor } from '../../SampleData/Color';
import { num } from '../SignInScreen';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>      
      <TopSection img={Users[num].profilePhoto} text={Users[num].UName} />
      <SearchIconBar />
      <TouchableOpacity style={styles.postInput} onPress={() => navigation.navigate('PostScreen', { addPost })}>
        <Ionicons name="create-outline" size={24} color={lnColor} />
        <Text style={styles.placeholderText}>What's on your mind?</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <ViewPostonScreen />
        {posts.map((post, index) => (
          <PostCard key={index} text={post.text} image={post.image} background={post.background} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal:14,
    // height:'100%',
    paddingBottom:20,
  },
  postInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:bgColor,
    borderColor:lnColor,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    borderWidth:1,
  },
  placeholderText: {
    marginLeft: 10,
    color: 'gray',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
});
