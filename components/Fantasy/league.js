import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function League() {
  return (
    <View>
    <TouchableOpacity style={styles.container}>
      <Icon name="plus" size={20} color="black" style={styles.icon} />
      <Text style={styles.text}>League</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',   
    justifyContent: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    width: 150, 
    height: 50,
    marginBottom: 30,        
  },
  icon: {
    marginRight: 10,           
  },
  text: {
    fontSize: 16,       
  },
});
