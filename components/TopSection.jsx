import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { IconImg, lnColor } from '../SampleData/Color'

const TopSection = ({ img, text }) => {
    const navigation = useNavigation();
    const handle_profile = () => {
        navigation.navigate('profile')
    }
    return (
        <View style={styles.main}>
            <View>
                <Image source={IconImg} style={styles.ProfileStyle1} />
            </View>
            {/* <Text style={styles.welcome}>Welcome Back</Text> */}
            <TouchableOpacity onPress={handle_profile} style={[{borderColor:lnColor, borderWidth:2, borderRadius:100,}]}>
                <Image source={img} style={styles.ProfileStyle} />
            </TouchableOpacity>

        </View>
    )
}

export default TopSection

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    ProfileStyle: {
        width: 54,
        height: 54,
        borderRadius: 100
    },
    ProfileStyle1: {
        width: 115,
        height: 40,
        borderRadius:10,
    },
    welcome: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: '#F83758',
    },
    welcome1: {
        height: 40,
        width: 140,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        // backgroundColor:'#DFDFDF',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: '#F83758'
    },
})