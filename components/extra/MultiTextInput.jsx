import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { } from 'expo-image-picker';
import { PostWithImgAndText } from '../../SampleData/DummyPost';
import { Users } from '../../SampleData/DummyUser';
import { num } from '../../screens/SignInScreen';

const MultiTextInput = ({ send }) => {
    const [value, setValue] = useState("");

    const handle_upload = () => {
        PostWithImgAndText.push({
            id: 3,
            user: Users[num].UName,
            userPhoto: Users[num].profilePhoto,
            text: value,
            img: Users[num].profilePhoto
        });
        setValue('');
    }
    return (
        <View>
            <View style={styles.main}>
                <TextInput
                    placeholder="Enter text here..."
                    style={styles.input}
                    placeholderTextColor="#999"
                    value={value}
                    onChangeText={setValue}
                    multiline
                />

                <View style={styles.lowLevel}>
                    <View style={styles.lowmint}>
                        <TouchableOpacity style={styles.lowmint}>
                            <MaterialCommunityIcons name='square' size={24} color={"#FF6666"} />
                            <Text style={styles.ImgText}>BackGround</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowmint}>
                        <TouchableOpacity style={styles.lowmint}>
                            <MaterialCommunityIcons name='image' size={24} color={'#FF6666'} />
                            <Text style={styles.ImgText}>Media</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowmint}>
                        <TouchableOpacity style={styles.lowmint} onPress={handle_upload}>
                            <MaterialIcons name="send" size={24} color="#FF6666" />
                            <Text style={styles.ImgText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>

    );
};

export default MultiTextInput;

const styles = StyleSheet.create({
    mic1: { top: 38, right: 25 },
    lowmint1: { bottom: 0, alignSelf: 'center', alignContent: 'center', justifyContent: 'center', alignItems: 'center' },
    nextButton: { gap: 15, right: 10, justifyContent: 'space-around' },
    translation: { width: 300, color: '#111111', fontSize: 16, paddingTop: 10, textAlign: 'center' },
    textSection: { marginVertical: 10, alignItems: 'center' },
    languageName: { fontSize: 20, fontWeight: 'bold', color: '#444', textAlign: 'left' },
    main: { width: '80%', backgroundColor: '#fff', borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' },
    input: { borderWidth: 0, padding: 8, height: 200, fontSize: 20, fontWeight: '600' },
    lowLevel: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, bottom: 10, width: '100%' },
    lowmint: { alignContent: 'center', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' },
    buttons: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, width: '100%' },

    // Convert Button Styling
    convertButton: {
        backgroundColor: "#007AFF",
        padding: 10,
        borderRadius: 6,
        marginVertical: 10,
        alignItems: "center",
    },
    convertButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    romanizedText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
        marginBottom: 5,
    },
});
