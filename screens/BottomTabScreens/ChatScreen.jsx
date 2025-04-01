import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Select from '../../components/Select'
import SelectUser from '../../components/chat/SelectUser'
import {userDataChat} from '../../SampleData/Chat'
import { bgColor, fgColor } from '../../SampleData/Color';

const ChatScreen = () => {
  return (
    <View style={[styles.container,{backgroundColor: bgColor}]}>
      <Text style={[styles.header,{color:fgColor}]}>Chat List</Text>
     <ScrollView style={styles.container1}>
      {userDataChat.map((value, index) => (
            <SelectUser
              key={index}
              name={value.Text}
              stext={value.lastText}
              Img={value.Img}
              Icon={value.icon}
              color={value.color}
              id_value={value._id_value}
            />
      ))}

     </ScrollView>
     </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 70,
    bottom:10,
    marginVertical:20,
    paddingHorizontal:20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
