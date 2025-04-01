import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./BottomTabScreens/HomeScreen";
import WishList from "./BottomTabScreens/WishList";
import ShoppingScreen from "./BottomTabScreens/ShoppingScreen";
import ChatScreen from "./BottomTabScreens/ChatScreen";
import SettingsScreen from "./BottomTabScreens/SettingsScreen";
import { bgColor, paginationColor } from "../SampleData/Color";

const Tab = createBottomTabNavigator();
const BottomTabScreens = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle:{
        backgroundColor:bgColor,
        height: 80,
        paddingTop: 10,
        width:'95%',
        borderRadius:10,
        alignSelf:'center',
        bottom:20,
      },
      tabBarActiveTintColor: paginationColor,
      tabBarInactiveTintColor: '#8B8B94'
    }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" size={24} color={color} />
          ),
       title: 'Home'
        }}
      />
      <Tab.Screen
        name="Notification"
        component={WishList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-outline" size={24} color={color} />
          ),
          title: 'Notification'
        }}
      />
      
      <Tab.Screen
        name="shop"
        component={ShoppingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View style={[styles.circle, {backgroundColor: bgColor},{borderColor: '#BCBCBC'}]}>
                <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />
            </View>
          ),
          title: ' '
        }}
      />
      <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color}) => (
            <MaterialIcons name="message" size={24} color={color} />
        ),
        title: 'Chat'
      }}
      />
    
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
          title: 'Settings'
        }}
      /> 
    </Tab.Navigator>
  );
};

export default BottomTabScreens;

const styles = StyleSheet.create({
    circle:{
        height:70,
        width:70,
        borderRadius:'100%',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        bottom:7,
        borderWidth:1,
    }
});
