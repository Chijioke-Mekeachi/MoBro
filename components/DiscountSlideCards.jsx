import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StyleButton from './StyleButton'
import { paginationColor } from '../SampleData/Color'

const DiscountSlideCards = () => {
    const discountData = [
        {
            header:"50-40% OFF",
            description:"now in (Product) all colors",
            img: require("../assets/Card1.png"),
        },
        {
            header:"UpTo 70% OFF",
            description:"Cooking utencils",
            img: require("../assets/download.jpg"),
        },
        {
            header:"30% OFF",
            description:"Intel ,Hp, Apple..",
            img: require("../assets/download1.jpg"),
        },
    ]
  return (
    <View>
      <Swiper
              paginationStyle={styles.paginationStyle}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
              autoplay
            >
    {discountData.map((discount, index) =>(
        <View key={index} style={styles.Card1Holder}>
            <ImageBackground style={styles.container}
                        source={discount.img}
                        resizeMode={'cover'}>
                            <View style={styles.card}>
                                <Text style={styles.mainText}>{discount.header}</Text>
                                <Text style={styles.description}>{discount.description}</Text>
                                <StyleButton width={140} Theight={50}/>
                            </View>
            </ImageBackground>
        </View>
    ))}
    
    </Swiper>
    </View>
  )
}

export default DiscountSlideCards

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignContent:'center',
        padding:20,
        borderRadius:70,
        height:'55%',
        top:'25%',
        gap:10,
    },
    Card1Holder:{
        padding:25,
        borderRadius:70,
    },
    mainText:{
        fontSize:24,
        fontWeight:'500',
        color:'#FFFFFF',
    },
    description:{
        fontSize:14,
        color:'#FFFFFF',
        width:130,
    },
    paginationStyle: {
        top:-250,
      },
      dotStyle: {
        width: 7,
        height: 7,
        borderRadius: 6,
      },
      activeDotStyle: {
        width: 7,
        height: 7,
        borderRadius: 6,
        backgroundColor: paginationColor,
      },
})