import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { bgColor, btnColor, fgColor, lit_bg_color, paginationColor, settingBtn } from '../../SampleData/Color'

const TopSect = ({ user, name }) => {
    const [isCommentModalVisible, setCommentModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.main1}>
                <TouchableOpacity style={styles.main}>
                    <Image source={user} style={[styles.img,{borderWidth:2, borderColor: paginationColor}]} />
                    <Text style={[styles.text,{backgroundColor:bgColor, color:fgColor}]}>{name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCommentModalVisible(true)}>
                    <MaterialCommunityIcons name='menu' size={34} color={"grey"} style={styles.icon} />
                </TouchableOpacity>
            </View>
            {/* modular start here */} 
            <Modal visible={isCommentModalVisible} transparent animationType="slide">
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        {/* <Text style={styles.modalTitle}>What</Text> */}
                        <ScrollView style={styles.ScrollView}>
            
                        <TouchableOpacity style={styles.settingItem}>
                            <Image source={user} style={styles.img}/>
                            <Text style={styles.settingText}>{name}
                            </Text>
                          </TouchableOpacity>
                          {/* list  1 */}
                          <TouchableOpacity style={styles.settingItem}>
                            <MaterialCommunityIcons name="delete" size={24} color="black" />
                            <Text style={styles.settingText}>Block</Text>
                          </TouchableOpacity>
            
                        {/* list 2 */}
                        <TouchableOpacity style={styles.settingItem}>
                            <MaterialCommunityIcons name="delete" size={24} color="black" />
                            <Text style={styles.settingText}>Report User</Text>
                          </TouchableOpacity>
                        {/* list 3 */}
            
                        <TouchableOpacity style={styles.settingItem}>
                            <MaterialCommunityIcons name="delete" size={24} color="black" />
                            <Text style={styles.settingText}>Restart Messages</Text>
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

export default TopSect

const styles = StyleSheet.create({
    main: {
        padding: 10,
        flexDirection: 'row',
        gap: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    text: {
        top: 10,
        fontWeight:'bold'
    },
    main1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
    },
    icon: {
        top: 20,
    },
    container: {
        // backgroundColor:"#DEDEDE",
        padding: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: lit_bg_color,
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
      backgroundColor: btnColor,
      color: fgColor,
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
      backgroundColor: settingBtn,
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