import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image, Alert, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { num } from '../SignInScreen';
import { Users } from '../../SampleData/DummyUser';
import { bgColor, btnColor, fgColor, paginationColor } from '../../SampleData/Color';

export var theme = false;

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [Theme, setTheme] = useState(true);
  const [privacyEnabled, setPrivacyEnabled] = useState(false);

  const toggleTheme = () => {
    setTheme(previousState => !previousState);
    theme = Theme;
  }
  const togglePrivacy = () => setPrivacyEnabled(previousState => !previousState);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => navigation.navigate("signin") },
    ]);
  };
  const handle_theme = () => {
    if(theme == true){
      theme = false;
    }else{
      theme= true;
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Text style={[styles.header,{color: fgColor}]}>Settings</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={Users[num].profilePhoto} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{Users[num].FullName}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings Options */}
      <View style={styles.settingItem}>
        <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        <Text style={styles.settingText}>Theme</Text>
        <Switch value={Theme} onValueChange={toggleTheme} />
      </View>
      <TouchableOpacity onPress={handle_theme}>
        <Text>Theme</Text>
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <MaterialCommunityIcons name="lock-outline" size={24} color="black" />
        <Text style={styles.settingText}>Privacy</Text>
        <Switch value={privacyEnabled} onValueChange={togglePrivacy} />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('About')}>
        <MaterialCommunityIcons name="information-outline" size={24} color="black" />
        <Text style={styles.settingText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <MaterialCommunityIcons name="account-cog-outline" size={24} color="black" />
        <Text style={styles.settingText}>Account Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.logoutButton,{backgroundColor:btnColor}]} onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:bgColor,
    paddingTop: 70,
    paddingHorizontal:20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editProfile: {
    color: '#007AFF',
    marginTop: 5,
  },
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
  settingText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: paginationColor,
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 30,
  },
  logoutText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
