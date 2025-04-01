import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TopSection from '../../components/TopSection';
import Select from '../../components/Select';
import { Users } from '../../SampleData/DummyUser';
import { num } from '../SignInScreen';
import { bgColor, fgColor } from '../../SampleData/Color';

const notifications = [
  { Img: require('../../assets/trevor.jpg'), Text: 'Liked Your Post', time: '10:00 PM ',date:'12/25/2025', icon: 'thumb-up', color: '#1877F2' },
  { Img: require('../../assets/batman.jpg'), Text: 'Batman Commented', time: '10:00 PM',date:' 12/25/2025', icon: 'message', color: '#FFD700' },
  { Img: require('../../assets/trevor.jpg'), Text: 'Liked Your Post', time: '10:00 PM ',date:'12/25/2025', icon: 'thumb-up', color: '#1877F2' },
  { Img: require('../../assets/batman.jpg'), Text: 'Batman Commented', time: '10:00 PM',date:' 12/25/2025', icon: 'message', color: '#FFD700' },
  { Img: require('../../assets/trevor.jpg'), Text: 'Liked Your Post', time: '10:00 PM ',date:'12/25/2025', icon: 'thumb-up', color: '#1877F2' },
  { Img: require('../../assets/batman.jpg'), Text: 'Batman Commented', time: '10:00 PM',date:' 12/25/2025', icon: 'message', color: '#FFD700' },
];

const WishList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopSection img={Users[num].profilePhoto} text={Users[num].UName} />
      <Text style={styles.header}>Notifications</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {notifications.map((item, index) => (
          <Select
            key={index}
            name={item.Text}
            time={item.time}
            Img={item.Img}
            Icon={item.icon}
            color={item.color}
            date={item.date}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:bgColor,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    // color: '#1C1E21',
    color:fgColor,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
});
