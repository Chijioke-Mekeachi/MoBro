import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TopSectionWithBack from '../../../components/TopSectionWithBack'
import Swiper from 'react-native-swiper'
import { imageProduct, Product } from '../../../SampleData/product'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../../components/CustomButton'


const ViewProductScreen = ({fig = 0}) => {
    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {/* <TopSectionWithBack text={""} Sname={'shopping'} onpress={() => {navigation.navigate('')}}/> */}
                {/* image slide */} 

                <View style={styles.container1}>
                    <Swiper
                        paginationStyle={styles.paginationStyle}
                        dotStyle={styles.dotStyle}
                        activeDotStyle={styles.activeDotStyle}
                        autoplay
                    >
                        {imageProduct.map((product, index) => (
                            <View key={index} style={styles.Card1Holder}>
                                <Image style={[
                                    styles.container1,
                                    { width: '96%' },
                                    { height: '50%' },
                                    { borderRadius: 10 },
                                    { borderWidth: 1 },
                                    { borderColor: '#DDDDDD' },
                                    { alignSelf: 'center' }
                                ]} source={product.img} />
                            </View>
                        ))}
                    </Swiper>
                </View>
                {/* image slid endgin */}
                {/* {Full description } */}
                <View style={styles.container2}>
                    <Text style={styles.BigText}>{Product[fig].name}</Text>
                    <Text style={styles.shorDescription}>{Product[fig].description}</Text>
                    <View style={styles.star_price}>
                        <View style={styles.star}>
                            <MaterialCommunityIcons name='star' size={24} color={"gold"} />
                            <MaterialCommunityIcons name='star' size={24} color={"gold"} />
                            <MaterialCommunityIcons name='star' size={24} color={"gold"} />
                            <MaterialCommunityIcons name='star' size={24} color={"gold"} />
                            <MaterialCommunityIcons name='star' size={24} color={"grey"} />
                        </View>
                        <View ><Text style={styles.Price}>${Product[fig].price}</Text></View>
                    </View>
                    <Text style={styles._major_}>Product Details</Text>
                    <Text style={styles.longDes}>{Product[fig].longDescip}</Text>
                </View>
                {/* {Ending full decription } */}
                <View style={styles.btnl}>
                <CustomButton
                title={"Message Seller"}
                textColor={"#FFFFFF"}
                backgroundColor={"#FF7777"}
                />
                </View>
            </ScrollView>
        </View>
    )
}

export default ViewProductScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: 50,
        width: 480,
        alignContent: 'center',
        // height: 400,
    },
    scroll: {
        maxHeight: '100%',
    },
    container2:{
        bottom:500,
        paddingLeft:30,
    },
    BigText:{
        fontSize:24,
        fontWeight:'600',
        textAlign:'left',
    },
    shorDescription:{
        fontSize:14,
        width:305,
    },
    star:{
        flexDirection:'row',
        gap:5,
    },
    star_price:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:25,
    },
    Price:{
        fontSize:18,
        fontWeight:'500',
    },
    _major_:{
        fontSize:18,
        fontWeight:'500',
    },
    longDes:{
        fontSize:14,
        width:"95%",
        padding:10,
    },
    paginationStyle:{
        bottom:580,
    },
    activeDotStyle:{
        backgroundColor:'#FF9999'
    },
})