import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CircleImageSocial from '../components/CircleImageSocial';
import LinkLikeButton from '../components/LinkLikeButton';
import { Users } from '../SampleData/DummyUser';
import { supabase } from '../supabase';
import { bgColor, btnColor, fgColor } from '../SampleData/Color';

export var num = 0;

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgot, setForgot] = useState(false);

  async function signInWithEmail() {
    setLoading(true)
    const { 
      error ,
      data : {session},
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if(session){
      navigation.navigate('signup');
    }
    if (error) Alert.alert(error.message)
    setLoading(false)
  }
  

  const handleSignin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Enter both email and password.');
      setForgot(true);
      return;
    }

    // Find user in the Users array
    const user = Users.find((u, index) => {
      if (u.UEmail === email && u.password === password) {
        num = index;
        return true;
      }
      return false;
    });

    if (user) {
      // console.log('Logged in:', user);
      navigation.navigate('start');
    } else {
      setForgot(true);
      Alert.alert('Incorrect Credentials', 'Incorrect email or password.');
    }
  };

  return (
    <View style={[styles.container,{backgroundColor: bgColor}]}>
      <Text style={[styles.BigText,{color: fgColor,}]}>Welcome Back!</Text>

      {/* Custom Inputs */}
      <CustomInput placeholder="Enter your email" icon="mail" keyboardType="email-address" label="Email Address" value={email} onChangeText={setEmail} />
      <CustomInput placeholder="Enter your password" icon="lock" password={true} label="Password" value={password} onChangeText={setPassword} />

      {forgot && (
        <View style={styles.ForgetView}>
          <LinkLikeButton text="Forgot Password?" onpress={() => Alert.alert('Reset Password', 'Password reset flow here.')} />
        </View>
      )}

      <View style={styles.ButtonContainer}>
        <CustomButton title="Login" textColor="white" backgroundColor={btnColor} onPress={handleSignin} Width="100%" />
      </View>

      {/* Below Signup with Others */}
      <View style={styles.ButtomSignin}>
        <Text style={[{color:fgColor}]}>- OR Continue With -</Text>
        <View style={styles.InsideSocialView}>
          <CircleImageSocial image={require('../assets/Frame 4.png')} />
          <CircleImageSocial image={require('../assets/apple 1.png')} />
          <CircleImageSocial image={require('../assets/facebook-app-symbol 1.png')} />
        </View>
        <Text style={[{color:fgColor}]}>
          Create an Account{' '}
          <LinkLikeButton text="Sign up" onpress={() => {navigation.navigate('signup')}} />
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 100,
    width: '100%',
    alignContent: 'center',
    padding: 20,
    height:'100%'
  },
  BigText: {
    fontSize: 36,
    fontWeight: '700',
    width: 300,
  },
  ButtonContainer: {
    marginTop: 20,
    paddingTop: 20,
  },
  InsideSocialView: {
    flexDirection: 'row',
    gap: 10,
  },
  ButtomSignin: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 45,
  },
  ForgetView: {
    alignSelf: 'flex-end',
  },
});
