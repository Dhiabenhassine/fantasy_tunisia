import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Feature = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>أخر المستجدات :</Text>
      <Text style={styles.subText}>إنتقال حسان عرفاوي إلى الجم لمقابلة الكناتري</Text>

    </View>
  )
}

export default Feature

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  }
})
