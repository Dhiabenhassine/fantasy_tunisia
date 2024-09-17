import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailsClassement() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>الترتيب</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeaderCell}>النقاط</Text>
          <Text style={styles.tableHeaderCell}>النادي</Text>
          <Text style={styles.tableHeaderCell}>الترتيب</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>30</Text>
          <Text style={styles.tableCell}>الترجي الرياضي</Text>
          <Text style={styles.tableCell}>1</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>28</Text>
          <Text style={styles.tableCell}>النجم الرياضي البنزرتي</Text>
          <Text style={styles.tableCell}>2</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>24</Text>
          <Text style={styles.tableCell}>النجم الرياضي الساحلي</Text>
          <Text style={styles.tableCell}>3</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   width:405,
    padding: 10,
  },
  titleContainer: {
    backgroundColor: '#B0EBB4',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  table: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
   
    textAlign: 'center',
  },
  tableCell: {
   
    textAlign: 'center',
  },
})
