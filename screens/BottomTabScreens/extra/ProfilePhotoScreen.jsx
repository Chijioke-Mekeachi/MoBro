import React, { useState } from 'react';
import { View, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { createClient } from '@supabase/supabase-js';
import { useNavigation } from '@react-navigation/native';
import { supabase} from '../../../supabase';


const ProfilePhotoScreen = () => {
    const navigation = useNavigation();
    const [imageUri, setImageUri] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            uploadImage(result.assets[0].uri);
        }
    };

    const uploadImage = async (uri) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            const fileName = `profile_${Date.now()}.jpg`;

            let { data, error } = await supabase.storage
                .from('profile_photos')
                .upload(fileName, blob);

            if (error) throw error;

            const { data: fileData } = supabase.storage
                .from('profile_photos')
                .getPublicUrl(fileName);
            setImageUri(fileData.publicUrl);
            Alert.alert('Upload Successful', 'Profile photo updated!');
            navigation.navigate('home')
        } catch (error) {
            Alert.alert('Upload Failed', error.message);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, borderRadius: 50 }} />}
            <Button title="Pick a Profile Photo" onPress={pickImage} />
        </View>
    );
};

export default ProfilePhotoScreen;
