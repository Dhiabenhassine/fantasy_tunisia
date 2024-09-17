import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DetailsMatches() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>المقابلات</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>النادي الإفريقي</Text>
          <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
          <Text style={styles.tableCell}>الترجي الرياضي</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>النجم الرياضي الساحلي</Text>
          <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
          <Text style={styles.tableCell}>النادي الرياضي البنزرتي</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 405,
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
    justifyContent: 'space-around', 
    alignItems: 'center',           
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    textAlign: 'center',
    flex: 1,                       
  },
  outlineText: {
    borderWidth: 1,                
    borderColor: '#000',          
    paddingVertical: 2,            
    borderRadius: 5,             
    textAlign: 'center',           
    alignSelf: 'center',         
  },
})
