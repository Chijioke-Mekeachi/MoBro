import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { btnColor } from '../SampleData/Color'

const StarterScreen = () => {
    const navigation = useNavigation();
    return (

        <ImageBackground style={styles.container}
            source={require('../assets/back.png')}
            resizeMode={'cover'}>
            <View style={styles.mainContainer}>
                <View style={styles.textContainer1}>
                    <Text style={styles.text1}>You Want Authentic, Here you go! </Text>
                    <Text style={styles.text2}>Find it now, Buy it here</Text>
                </View>

                <View style={styles.textContainer}>
                    {/* TouchableOpacity wrapping both Text and Icon */}
                    <View style={styles.ButtonContainer}>
                        <CustomButton
                            title={"Get Started"}
                            textColor={"white"}
                            backgroundColor={btnColor}
                            style={styles.buttonContainer}
                            onPress={() => {navigation.navigate('bottomTab')}}
                            Width={"60%"}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}

export default StarterScreen

const styles = StyleSheet.create({
    mainContainer:{
        backfaceVisibility:'visible',
    },
    textContainer: {
        paddingLeft: 10,
        height: '60%'
    },
    textContainer1: {
        alignContent:'center',
        justifyContent:"flex-end",
        alignSelf:'center',
        height: '60%'
    },
    container: {
        height: '100%'
    },
    ButtonContainer: {
        marginTop: 20,
        paddingTop: 20,
    },
    text1: {
        width: 255,
        fontSize: 36,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    text2: {
        fontSize: 13,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    buttonContainer:{

    },
})