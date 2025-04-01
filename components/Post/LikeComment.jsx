import { Alert, StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, FlatList, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Comment } from '../../SampleData/DummyComment'; // Import comments array
import { num } from '../../screens/SignInScreen';
import { Users } from '../../SampleData/DummyUser';

const LikeComment = ({ postid = 1 }) => {
    const [color, setColor] = useState('grey');
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(Comment); // Manage comment array
    const [Ccolor, setCcolor] = useState('grey');
    const [commentText, setCommentText] = useState('');
    const [isCommentModalVisible, setCommentModalVisible] = useState(false);

    const handleLike = () => {
        setLikes(prevLikes => (color === 'grey' ? prevLikes + 1 : prevLikes - 1));
        setColor(prevColor => (prevColor === 'grey' ? '#4444DD' : 'grey'));
    };

    const handleComment = () => {
        setCommentModalVisible(true);
    };

    const submitComment = () => {
        if (commentText.trim() !== '') {
            const newComment = { id: 1, user: Users[num].UName, text: commentText, Img: Users[num].profilePhoto };
            setComments([...comments, newComment]); // Add new comment to array
            Comment.push({
                id: postid,
                text: commentText,
                user: Users[num].UName,
                Img:Users[num].profilePhoto,
            })
            setCcolor('gold');
            setCommentText('');
        }
    };

    return (
        <View style={styles.container}>
            {/* Like Button */}
            <TouchableOpacity style={styles.btn} onPress={handleLike}>
                <MaterialCommunityIcons name="thumb-up" size={24} color={color} />
                <Text>{likes}</Text>
            </TouchableOpacity>

            {/* Comment Input Section */}
            <View style={styles.input_section}>
                <TextInput
                    style={styles.input}
                    value={commentText}
                    onChangeText={setCommentText}
                    placeholder="Type your comment..."
                    multiline
                />
                {commentText.length > 0 && (
                    <TouchableOpacity onPress={submitComment}>
                        <Text style={styles.sendBtn}>Send</Text>
                    </TouchableOpacity>
                )}
            </View>

            {/* Comment Button */}
            <TouchableOpacity style={styles.btn} onPress={handleComment}>
                <MaterialCommunityIcons name="message" size={24} color={Ccolor} />
                <Text>{comments.length}</Text>
            </TouchableOpacity>

            {/* Comment Modal */}

            <Modal visible={isCommentModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Comments</Text>
                        <ScrollView style={styles.ScrollView}>
                            <FlatList
                                data={comments}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.commentBox}>
                                        <View style={styles.ImageNameComment}>
                                            <Image style={styles.commentImg} source={item.Img} />
                                            <Text style={styles.commentUser}>@{item.user}:</Text>
                                        </View>
                                        <Text style={styles.commentText}>{item.text}</Text>
                                    </View>
                                )}
                            />
                        </ScrollView>
                        <TouchableOpacity onPress={() => setCommentModalVisible(false)}>
                            <Text style={styles.closeBtn}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LikeComment;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 50,
        alignItems: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_section: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    sendBtn: {
        color: '#F83758',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    commentBox: {
        // flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor:'#DDD',
        padding:10,
        marginVertical:10,
        borderBottomLeftRadius:10,
        borderBottomEndRadius:10,
        borderTopRightRadius:10,
        width:300,
    },
    commentUser: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    commentText: {
        color: '#333',
        textAlign:'left',
        width:'100%,',
        // padding:5,
    },
    closeBtn: {
        color: '#F83758',
        marginTop: 10,
        fontWeight: 'bold',
    },
    ScrollView: {
        maxWidth: '100%',
        maxHeight: 300,
    },
    ImageNameComment:{
        flexDirection:'row',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        right:10,
    },
    commentImg:{
        height:40,
        width:40,
        borderRadius:100,
    }
});
