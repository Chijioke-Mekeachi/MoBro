import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TopSection from '../../components/TopSection'
import SearchIconBar from '../../components/SearchIconBar'
import SortComponent from '../../components/SortComponent'
import PhotoRoll from '../../components/PhotoRoll'
import DiscountSlideCards from '../../components/DiscountSlideCards'
import NotifyBonus from '../../components/NotifyBonus'
import ProductPrice from '../../components/ProductPrice'
import { imgData, Product } from '../../SampleData/product'
import { useNavigation } from '@react-navigation/native'
import { num } from '../SignInScreen'
import { Users } from '../../SampleData/DummyUser'
import { back,back1 } from '../BottomTabsScreens'
import { bgColor } from '../../SampleData/Color'

const ShoppingScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {backgroundColor:bgColor}]}>
      <TopSection img={Users[num].profilePhoto} text={Users[num].UName}/>
      <SearchIconBar onChangeText={setSearch} value={search} />
      <SortComponent text={"All Featured"} />
      <ScrollView style={styles.ScrollView}>
        <PhotoRoll valueObj={imgData} />
        <DiscountSlideCards />
        <NotifyBonus />
        <View style={styles.productView}>
            <ProductPrice productData={Product} onPress={() => {navigation.navigate('ViewProduct')}}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default ShoppingScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 70,
    width: '100%',
    alignContent: 'center',
  },
  ScrollView: {
    alignSelf:'center',
    maxHeight: "100%",
    padding:10,
  },
  productView: {
    bottom: 470,
    width: "100%",
    flexDirection:'row',
    flexWrap:'wrap',
  },

})