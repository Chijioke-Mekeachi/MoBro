import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CircleImageSocial from '../components/CircleImageSocial';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import LinkLikeButton from '../components/LinkLikeButton';
import { Users } from '../SampleData/DummyUser';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../supabase';
import { bgColor, btnColor, fgColor } from '../SampleData/Color';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [fullname, setFullname] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if(session){
      navigation.navigate('profile_photo');
    }
    navigation.navigate('profile_photo');
    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  
  // const handle_signup = () => {
  //   if (!fullname || !userName || !email || !password || !confirm) {
  //     Alert.alert('Error', 'All fields are required');
  //     return;
  //   }

  //   if (password !== confirm) {
  //     Alert.alert('Error', 'Passwords do not match');
  //     return;
  //   }

  //   // Add the new user correctly
  //   Users.push({
  //     UName: userName,
  //     UEmail: email,
  //     class: 'user',
  //     password: password,
  //     FullName: fullname,
  //     profilePhoto: require('..//assets/download.jpg'),
  //   });

  //   Alert.alert('Success', 'Account created successfully!');
  //   navigation.navigate('signin');
  // };

  return (
    <View style={[styles.container,{backgroundColor: bgColor}]}>
      <ScrollView style={styles.high}>
        <Text style={styles.BigText}>Create An Account</Text>

        {/* Custom Inputs */}
        <View style={styles.InputSection}>
          <CustomInput placeholder="Full Name" icon="person-outline" value={fullname} onChangeText={setFullname} />
          <CustomInput placeholder="Username" icon="person" value={userName} onChangeText={setUserName} />
          <CustomInput placeholder="Enter your email" icon="mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
          <CustomInput placeholder="Password" icon="lock" password={true} value={password} onChangeText={setPassword} />
          <CustomInput placeholder="Confirm Password" icon="lock" password={true} value={confirm} onChangeText={setConfirm} />
        </View>

        <Text style={[styles.Explain, {color: fgColor}]}>
          By clicking the <Text style={styles.LinkText1}>Create Account</Text> button, you agree to the public offer.
        </Text>

        <View style={styles.ButtonContainer}>
          <CustomButton title="Create Account" textColor="white" backgroundColor={btnColor} onPress={signUpWithEmail} Width="100%" />
        </View>

        {/* Below Signup with Others */}
        <View style={styles.ButtomSignin}>
          <Text style={[{color: fgColor}]}>- OR Continue With -</Text>
          <View style={styles.InsideSocialView}>
            <CircleImageSocial image={require('../assets/Frame 4.png')} />
            <CircleImageSocial image={require('../assets/apple 1.png')} />
            <CircleImageSocial image={require('../assets/facebook-app-symbol 1.png')} />
          </View>
          <Text style={[{color: fgColor}]}>
            Already have an account?{' '}
            <LinkLikeButton text="Sign in" onpress={() => navigation.navigate('signin')} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 100,
    width: '100%',
    alignContent: 'center',
    height: '100%',
  },
  BigText: {
    fontSize: 36,
    fontWeight: '700',
    width: 255,
    paddingLeft: 20,
    color:fgColor,
  },
  ButtonContainer: {
    marginTop: 20,
    paddingTop: 20,
    width: '96%',
    alignSelf: 'center',
  },
  LinkText1: {
    color: btnColor,
    fontWeight: '400',
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
  Explain: {
    fontSize: 13,
    fontWeight: '300',
    width: 300,
    textAlign: 'left',
    marginLeft: 10,
    padding: 20,
  },
  InputSection: {
    width: '96%',
    alignSelf: 'center',
  },
  high: {
    maxHeight: '95%',
  },
});
