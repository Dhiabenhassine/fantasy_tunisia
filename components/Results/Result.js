import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Result() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4379F2', '#B0EBB4']}
        start={{ x: 0.7, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>النتائج للجولة 5</Text>
        </View>
        <View style={styles.tableContainer}>
          <View style={[styles.tableRow, styles.outlineText2]}>
            <Text style={styles.tableCell}>النادي الإفريقي</Text>
            <Text style={[styles.tableCell, styles.outlineText]}>1-1</Text>
            <Text style={styles.tableCell}>الترجي الرياضي</Text>
          </View>
          <View style={[styles.tableRow, styles.outlineText2]}>
            <Text style={styles.tableCell}>النجم الرياضي الساحلي</Text>
            <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
            <Text style={styles.tableCell}>النادي الرياضي البنزرتي</Text>
          </View>
          <View style={[styles.tableRow, styles.outlineText2]}>
            <Text style={styles.tableCell}>النادي الرياضي الصفاقسي</Text>
            <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
            <Text style={styles.tableCell}>الاتحاد الرياضي المنستيري</Text>
          </View>
          <View style={[styles.tableRow, styles.outlineText2]}>
            <Text style={styles.tableCell}>الاتحاد الرياضي ببنقردان</Text>
            <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
            <Text style={styles.tableCell}>المستقبل الرياضي بسليمان</Text>
          </View>
          <View style={[styles.tableRow, styles.outlineText2]}>
            <Text style={styles.tableCell}>أوليمبيك باجة</Text>
            <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
            <Text style={styles.tableCell}>النجم الرياضي بالمتلوي</Text>
          </View>
          <View style={[styles.tableRow, styles.outlineText2]}>
            <Text style={styles.tableCell}>الاتحاد الرياضي بتطاوين</Text>
            <Text style={[styles.tableCell, styles.outlineText]}>12:00</Text>
            <Text style={styles.tableCell}>المستقبل الرياضي بقابس</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the available space
  },
  gradient: {
    flex: 1, // Ensure the gradient covers the entire container
  },
  titleContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableContainer: {
    flex: 1, 
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    paddingHorizontal: 15,
    paddingVertical:20,
    borderRadius:10
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
  outlineText2: {
    marginBottom: 10,
    width: '100%', 
    borderWidth: 3,
    borderColor: '#000',
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
