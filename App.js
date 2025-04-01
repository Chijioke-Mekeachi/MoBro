import { StatusBar } from 'expo-status-bar';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/OnboardingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import StarterScreen from './screens/StarterScreen';
import HomeScreen from './screens/BottomTabScreens/HomeScreen';
import BottomTabScreens from './screens/BottomTabsScreens';
import WishList from './screens/BottomTabScreens/WishList';
import ShoppingScreen from './screens/BottomTabScreens/ShoppingScreen';
import ChatScreen from './screens/BottomTabScreens/ChatScreen';
import SettingsScreen from './screens/BottomTabScreens/SettingsScreen';
import ViewProductScreen from './screens/BottomTabScreens/extra/ViewProductScreen';
import ChatRoom from './screens/BottomTabScreens/extra/ChatRoom';
import Myprofile from './components/profile/Myprofile';
import About from './components/about/About';
import PostScreen from './screens/BottomTabScreens/extra/PostScreen';
import ProfilePhotoScreen from './screens/BottomTabScreens/extra/ProfilePhotoScreen';

const Stack = createStackNavigator();
// application name :Bizi
export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
      <Stack.Screen name='signin' component={SignInScreen} options={{headerShown: false}}/>
      <Stack.Screen name='signup' component={SignUpScreen} options={{headerShown: false}}/>
      <Stack.Screen name='forget' component={ForgotPasswordScreen} options={{headerShown: false}}/>
      <Stack.Screen name='start' component={StarterScreen} options={{headerShown: false}}/>
      <Stack.Screen name='bottomTab' component={BottomTabScreens} options={{headerShown: false}}/>
      <Stack.Screen name='home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='wishlist' component={WishList} options={{headerShown: false}}/>
      <Stack.Screen name='shop' component={ShoppingScreen} options={{headerShown: false}}/>
      <Stack.Screen name='chat' component={ChatScreen} options={{headerShown: false}}/>
      <Stack.Screen name='setting' component={SettingsScreen} options={{headerShown: false}}/>
      <Stack.Screen name='ViewProduct' component={ViewProductScreen} options={{headerShown: true}}/>
      <Stack.Screen name='chatroom' component={ChatRoom} options={{headerShown: true}}/>
      <Stack.Screen name='profile' component={Myprofile} options={{headerShown: true}}/>
      <Stack.Screen name='About' component={About} options={{headerShown: true}}/>
      <Stack.Screen name='PostScreen' component={PostScreen} options={{headerShown: true}}/>
      <Stack.Screen name='profile_photo' component={ProfilePhotoScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({

});
