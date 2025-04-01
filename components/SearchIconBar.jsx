import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { lnColor, paginationColor } from '../SampleData/Color'

const SearchIconBar = ({ onChangeText, value, }) => {
  return (
    <View style={[styles.container]}>
      <MaterialIcons name='search' size={24} color={lnColor} />
      <TextInput
        placeholder={"search any product"}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={"#A2A2A7"}
        style={styles.input}
        keyboardType={"default"}
      />
      {/* <MaterialIcons name='mic' size={24} color={lnColor} /> */}
    </View>
  )
}

export default SearchIconBar

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    // justifyContent:'space-between',
    width: '96%',
    alignSelf: 'center',
    textAlign: 'left',
    borderColor: lnColor,
    
  },
  input:{
    width:'88%'
  },
})