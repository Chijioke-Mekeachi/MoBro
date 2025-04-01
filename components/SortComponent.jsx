import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { fgColor } from '../SampleData/Color'

const SortComponent = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.MajorText,{color:fgColor }]}>{text}</Text>

      <View style={styles.btnHolder}>
        <TouchableOpacity style={styles.btn}>
          <Text>sort</Text>
          <View style={styles.IconHolder}>
            <MaterialCommunityIcons name='arrow-up-thin' size={24} color={'grey'} style={styles.ico} />
            <MaterialCommunityIcons name='arrow-down-thin' size={24} color={'grey'} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text>Filter</Text>
          <MaterialCommunityIcons name='filter-outline' size={24} color={'grey'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SortComponent

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  btnHolder: {
    flexDirection: 'row',
    gap: 20,
  },
  btn: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: "#DFDFDF",
    textAlign: 'center',
    alignContent: 'center',
    padding: 5,  
    borderRadius:10,
  },
  IconHolder: {
    flexDirection: 'row',
  },
  ico: {
    left: 15,
  },
  MajorText: {
    fontSize: 17,
    fontWeight: '700',
  }
})