import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ProductPrice = ({ productData, onPress }) => {
    // const [index1, setindex1] = useState(index);
    // const handle_press = () => {
    //     setindex1(index)
    //     console.log(index1);
    //     onPress();
    // }
    return (
        <View style={styles.main}>
            {productData.map((product, index) => (
                <TouchableOpacity key={index} style={styles.container} onPress={onPress}>
                    <Image source={product.img} style={styles.img} />
                    <View style={styles.below}>
                        <Text style={styles.Bigtext}>{product.name}</Text>
                        <Text style={styles.smalltext}>{product.description}</Text>
                        <Text style={styles.price}>${product.price}</Text>
                        <View style={styles.discountPrice}>
                            <Text style={styles.discount}>${product.oldPrice}</Text>
                            <Text style={styles.AmmOff}>{product.percent}%off</Text>
                        </View>
                        <View style={styles.star_code}>
                            <View style={styles.star}>
                                <MaterialCommunityIcons name='star' size={16} color={"gold"} />
                                <MaterialCommunityIcons name='star' size={16} color={"gold"} />
                                <MaterialCommunityIcons name='star' size={16} color={"gold"} />
                                <MaterialCommunityIcons name='star' size={16} color={"gold"} />
                                <MaterialCommunityIcons name='star' size={16} color={"grey"} />
                            </View>
                            <Text style={styles.code}>{product.id}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

        </View>
    )
}
export default ProductPrice

const styles = StyleSheet.create({
    main: {
        flexWrap: 'wrap',
        gap: 10,
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    container: {
        flexWrap: 'wrap',
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 0,
        paddingLeft: 0,
        backgroundColor: "#FFFFFF",
        width: '42%',
    },
    star: {
        flexDirection: 'row',
    },
    star_code: {
        flexDirection: 'row',
        gap: 20,
    },
    discountPrice: {
        flexDirection: 'row',
        gap: 15,
    },
    AmmOff: {
        color: '#FE735C'
    },
    discount: {
        color: '#BBBBBB'
    },
    Bigtext: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Arial',
    },
    smalltext: {
        width: 170,
        fontSize: 14,
        fontWeight: '300'
    },
    img: {
        borderRadius: 10,
        height: 200,
        width: "98%",
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
    },
    below: {
        padding: 15,
    },
})