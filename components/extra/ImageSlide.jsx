import { Image, ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { imageProduct } from '../../SampleData/product'

const ImageSlide = () => {
  return (
    <View style={styles.container1}>
      <Swiper
              paginationStyle={styles.paginationStyle}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
            >
    {imageProduct.map((product, index) =>(
        <View key={index} style={styles.Card1Holder}>
            <Image style={[
                styles.container1,
                {width:'98%'},
                {height:'50%'},
                {borderRadius:10},
                {borderWidth:1},
                {borderColor:'#DDDDDD'}
                ]}source={product.img}/>
        </View>
    ))}
    
    </Swiper>
    </View>
  )
}

export default ImageSlide

const styles = StyleSheet.create({
    container1:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
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
    // mainText:{
    //     fontSize:24,
    //     fontWeight:'500',
    //     color:'#FFFFFF',
    // },
    // description:{
    //     fontSize:14,
    //     color:'#FFFFFF',
    //     width:130,
    // },
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
        backgroundColor: "#F83758",
      },
})