import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Select = ({ 
    name, 
    time = "2312", 
    onPress = () => {}, 
    Img = require('../assets/trevor.jpg'), 
    Icon = "account",  // Default icon
    color = "#232323",    // Default color
    date = "2328"
}) => {
    return (
        <TouchableOpacity style={styles.settingItem} onPress={onPress}>
            <View style={styles.content}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    <Image 
                        source={typeof Img === 'string' ? { uri: Img } : Img} 
                        style={styles.img} 
                    />
                    <Text style={styles.userName}>{name}</Text>
                    <MaterialCommunityIcons name={Icon} size={24} color={color} />
                </View>
                {/* Right Section */}
                <View style={styles.rightSection}>
                    <Text style={styles.sname}>{time}</Text>
                    <Text style={styles.sname}>{date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    onPress: PropTypes.func,
    Img: PropTypes.oneOfType([
        PropTypes.string, // Remote image URL
        PropTypes.number  // Local image import (require)
    ]),
    Icon: PropTypes.string,
    color: PropTypes.string,
    time: PropTypes.string,
};

export default Select;

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
    width:'auto',
  },
    content: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        // right:10,
    },
    rightSection: {
        flexDirection: 'column',
        justifyContent:'space-between',
        textAlign:'right',

        left:70,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
        color: "#323232",
        marginRight: 10, // Fallback for older React Native versions
    },
    sname: {
        fontSize: 13,
        fontWeight: '400',
        color: '#333333',
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10, 
    },
});
