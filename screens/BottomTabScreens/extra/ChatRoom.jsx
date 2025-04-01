import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Audio } from 'expo-av';
import OtherChat from '../../../components/chat/OtherChat';
import MyChat from '../../../components/chat/MyChat';
import TopSect from '../../../components/chat/TopSect';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ID } from '../../../components/chat/SelectUser';
import { userDataChat } from '../../../SampleData/Chat';
import { bgColor, btnColor, fgColor, lit_bg_color, paginationColor } from '../../../SampleData/Color';

const ChatRoom = () => {
  const [playicon, setPlayicon] = useState("play");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [recording, setRecording] = useState(null);
  const [play, setPlay] = useState(false);
  var num = 0;

  for (var x = 0; x < userDataChat.length; x++){
    if(userDataChat[x]._id_value == ID){
      var num = x;
      break;
    }
  }

  // Function to handle sending text message
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { name: "you", message: input, type: 'text' }]);
      setInput('');
    }
  };

  // Start recording audio
  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status !== 'granted') {
        Alert.alert('Permission required', 'You need to grant audio permissions to record.');
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  // Stop recording audio
  const stopRecording = async () => {
    console.log('Stopping recording..');
    if (!recording) return;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);

    setMessages([...messages, { name: "you", message: uri, type: 'audio' }]);
    setRecording(null);
  };
  const handle_play = () => {
    setPlayicon("pause");
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <Text style={styles.toptext}>Chat Room</Text>
      <TopSect user={userDataChat[num].Img} name={userDataChat[num].Text} />
      <ScrollView style={styles.scroll}>
        <View style={styles.section}>
          {messages.map((msg, index) => {
            if (msg.type === 'text') {
              return msg.name === 'you' ? (
                <MyChat key={index} text={msg.message} />
              ) : (
                <OtherChat key={index} text={msg.message} />
              );
            } else if (msg.type === 'audio') {
              return (
                <TouchableOpacity key={index} onPress={()=> {Audio.Sound.createAsync({ uri: msg.message }, { shouldPlay: true }); setPlay(true)}} style={styles.rec}>
                  <Text style={styles.audioMessage}><MaterialCommunityIcons name={play? 'play':'pause'} size={30} color={"grey"} style={styles.icon}/>Voice</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </ScrollView>
      <View style={styles.textInput}>
        <TextInput
          style={[styles.textinput,{color: fgColor}]}
          placeholder='Type a message'
          placeholderTextColor={fgColor}
          multiline
          value={input}
          onChangeText={setInput}
        />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btn} onPress={sendMessage}>
            <MaterialCommunityIcons name='send' size={30} color={btnColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={startRecording}
            onPressOut={stopRecording}
          >
            <MaterialCommunityIcons name={'microphone'} size={30} color={recording ? paginationColor : btnColor} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: bgColor,
    bottom:20,
  },
  toptext: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: 'center',
    marginBottom: 10,
  },
  section: {
    paddingBottom: 10,
    gap:5,
  },
  scroll: {
    flex: 1,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: lit_bg_color,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  textinput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 150,
    borderRadius: 20,
    backgroundColor: lit_bg_color,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    marginLeft: 10,
    padding: 5,
  },
  audioMessage: {
    color: fgColor,
    padding: 10,
    backgroundColor: bgColor,
    borderRadius: 10,
    marginVertical: 5,
  },
  icon:{
  padding:20,
  },
  rec:{
    width:100,
    alignSelf:'flex-end',
    // backgroundColor:btnColor
  }
});
