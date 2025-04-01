import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
export var ID = 0;

const SelectUser = ({ name, stext = "", onPress = () => { }, Img ='',id_value }) => {
    const navigation = useNavigation();
    const handlepress = () =>{
        ID = id_value;
        navigation.navigate('chatroom');
    }
    return (
        <TouchableOpacity style={styles.settingItem} onPress={handlepress}>
            <View style={styles.content}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    <Image
                        source={typeof Img === 'string' ? { uri: Img } : Img}
                        style={styles.img}
                    />
                    <Text style={styles.userName}>{name}</Text>
                </View>
                {/* Right Section */}

                <View style={styles.rightSection}>
                    <Text style={styles.sname}>{stext}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SelectUser

const styles = StyleSheet.create({
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        justifyContent: 'space-between',
        elevation: 2,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10, // Fallback for older React Native versions
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:30,
    },
    leftSection:{
        flexDirection:'row',
    },
    userName:{
        fontWeight:'500',
        fontSize:16,
        top:12,
    }
})