import { Image, Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { PostWithImgAndText } from '../../SampleData/DummyPost'
import { useNavigation } from '@react-navigation/native'

const ProfileOnPost = ({ img, user }) => {
  const navigation = useNavigation();
  const [isCommentModalVisible, setCommentModalVisible] = useState(false);
  const handle_removepost = () =>{
    PostWithImgAndText.pop();
  }
  const handle_profile = () =>{
    navigation.navigate('profile')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.name_img} onPress={handle_profile}>
        <Image source={img} style={styles.img} />
        <Text>{user}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCommentModalVisible(true)}>
        <MaterialCommunityIcons name='menu' size={24} color={"grey"} />
      </TouchableOpacity>
      <Modal visible={isCommentModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>What</Text>
            <ScrollView style={styles.ScrollView}>

            <TouchableOpacity style={styles.settingItem}>
                <Image source={img} style={styles.img}/>
                <Text style={styles.settingText}>{user}
                </Text>
              </TouchableOpacity>
              {/* list  1 */}
              <TouchableOpacity style={styles.settingItem}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
                <Text style={styles.settingText}>Remove Post</Text>
              </TouchableOpacity>

            {/* list 2 */}
            <TouchableOpacity style={styles.settingItem}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
                <Text style={styles.settingText}>Report Post</Text>
              </TouchableOpacity>
            {/* list 3 */}

            <TouchableOpacity style={styles.settingItem}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
                <Text style={styles.settingText}>Edit</Text>
              </TouchableOpacity>

            {/* list 2 */}
            <TouchableOpacity style={styles.settingItem}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
                <Text style={styles.settingText}>repost</Text>
              </TouchableOpacity>
            {/* list 3 */}

            <TouchableOpacity style={styles.settingItem}>
                <MaterialCommunityIcons name="delete" size={24} color="black" />
                <Text style={styles.settingText}>Quote</Text>
              </TouchableOpacity>
              </ScrollView>
            <TouchableOpacity onPress={() => setCommentModalVisible(false)} style={styles.btn}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ProfileOnPost

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignContent: 'center',
    alignItems: 'center',
  },
  name_img: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  btn: {
    borderRadius: 8,
    // width:100,
    // height:40,
    backgroundColor: '#FF4455',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
  },
  closeBtn: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAFAFA',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
    elevation: 2,
    width: '100%'
  },
  settingText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  ScrollView: {
    maxWidth: '100%',
    maxHeight: 300,
},
})