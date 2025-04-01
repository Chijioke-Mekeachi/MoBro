import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { Users } from '../../SampleData/DummyUser';
import { num } from '../../screens/SignInScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { bgColor, btnColor, fgColor, lnColor, paginationColor } from '../../SampleData/Color';

// Light Color Theme
const colors = {
  primary: '#A0C4FF', // Soft Blue
  darkText: '#444', // Dark Gray for readability
  lightBackground: '#F8F9FA', // Very Light Gray
  cardBackground: '#EAECEE', // Subtle Light Gray/Blue
  boxBackground: '#F1F3F5', // Light Pastel Gray
  white: '#FFFFFF',
};

const MyProfile = () => {
  const user = Users[num];

  // State to store editable user data
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    FullName: user?.FullName || '',
    UName: user?.UName || '',
    UEmail: user?.UEmail || '',
    password: user?.password || '',
    class: user?.class || '',
  });

  // Handle input changes
  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // Save changes
  const handleSave = () => {
    // Update global Users[num] if needed
    Users[num] = profile;
    setIsEditing(false);
    Alert.alert('Profile Updated', 'Your changes have been saved successfully.');
  };

  return (
    <View style={styles.container}>
      {/* Profile Photo Section */}
      <View style={styles.photo_section}>
        <TouchableOpacity>
          <Image source={user.profilePhoto} style={styles.photo} />
        </TouchableOpacity>
      </View>

      {/* User Information Section */}
      <View style={styles.text_section}>
        {isEditing ? (
          <TextInput
            style={[styles.name, styles.input]}
            value={profile.FullName}
            onChangeText={(text) => handleChange('FullName', text)}
          />
        ) : (
          <Text style={styles.name}>{profile.FullName}</Text>
        )}

        <View style={styles.low_section}>
          <Text style={styles.side_text}>User Data</Text>

          {/* Editable Fields */}
          {[
            { label: 'Username', field: 'UName' },
            { label: 'Email', field: 'UEmail' },
            { label: 'Password', field: 'password' },
            { label: 'Class', field: 'class' },
          ].map(({ label, field }, index) => (
            <View key={index} style={styles.text_box}>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={profile[field]}
                  onChangeText={(text) => handleChange(field, text)}
                />
              ) : (
                <Text style={styles.list}>
                  {label}: <Text style={styles.name1}>{profile[field]}</Text>
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.btn_view}>
        {isEditing ? (
          <TouchableOpacity style={styles.btn} onPress={handleSave}>
            <Text style={styles.text_btn}>
              <MaterialCommunityIcons name="check-circle" size={24} color={colors.white} /> Save
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={() => setIsEditing(true)}>
            <Text style={styles.text_btn}>
              <MaterialCommunityIcons name="file-edit" size={24} color={colors.white} /> Edit
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  photo_section: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: paginationColor,
  },
  text_section: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    color: fgColor,
  },
  low_section: {
    width: '95%',
    padding: 20,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: btnColor,
    backgroundColor: bgColor,
  },
  side_text: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10,
    color: fgColor,
  },
  text_box: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
    borderColor: btnColor,
    backgroundColor: bgColor,
  },
  list: {
    fontSize: 18,
    color: fgColor,
  },
  name1: {
    fontWeight: '400',
    fontSize: 18,
    color: fgColor,
  },
  btn_view: {
    marginTop: 20,
    width: '95%',
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: btnColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text_btn: {
    color:fgColor,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    fontSize: 18,
    fontWeight: '400',
    color: fgColor,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    textAlign: 'center',
    width: '100%',
  },
});
