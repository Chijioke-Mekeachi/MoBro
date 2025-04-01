import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.BigText}>Forgot Password?</Text>
      {/* Custom Inputs */}
      <CustomInput
        placeholder={"Enter your email address"}
        icon={"mail"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.textDes}>
        <Text style={styles.desText}>
        <Text style={styles.LinkText}>*</Text> We will send you a message to set or reset your new password
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <CustomButton
          title={"Submit"}
          textColor={"white"}
          backgroundColor={"#F83758"}
          style={styles.buttonContainer}
          onPress={() => {navigation.navigate('start')}}
          Width={"100%"}
        />
      </View>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: 100,
        width: '100%',
        alignContent: 'center',
        padding: 20
      },
      BigText: {
        fontSize: 36,
        fontWeight: '700',
        width: 300
      },
      ButtonContainer: {
        marginTop:20,
        paddingTop:20,
      },
      desText:{
        fontWeight:'300',
      },
      LinkText:{
        color:'#F83758',
        fontWeight:'400'
      },
      textDes:{
        paddingTop:20,
      },
})