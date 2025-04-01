import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const backgrounds = ['#f0f0f0', '#ffcccb', '#add8e6', '#90ee90', '#d3d3d3'];

const PostScreen = ({ route }) => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [background, setBackground] = useState(null);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    if (text || image) {
      route.params.addPost({ text, image, background });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Post</Text>
      </View>
      <ScrollView>
        <TextInput
          style={[styles.input, background ? { backgroundColor: background } : {}]}
          placeholder="What's on your mind?"
          multiline
          onChangeText={setText}
          value={text}
        />
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.backgroundContainer}>
          {backgrounds.map((bg, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.backgroundOption, { backgroundColor: bg }]}
              onPress={() => setBackground(bg)}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Pick Image" onPress={handleImagePick} />
          <Button title="Post" onPress={handlePost} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
  },
  backgroundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backgroundOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
