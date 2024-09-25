import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import DetailsMatches from './detailsMatches'; // Consistent import
import Detailsclassement from './detailsclassement';
export default function Matchs() {
  const [selectedButton, setSelectedButton] = useState('matches');

  const handlePress = (button) => {
    setSelectedButton(button);
  };

  const getButtonColors = (button) => {
    return selectedButton === button
      ? ['#4379F2', '#B0EBB4'] 
      : ['#9CA986', '#9CA986']; 
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('matches')} 
        >
          <LinearGradient
            colors={getButtonColors('matches')}
            style={styles.gradient}
            start={{ x: 0.7, y: 0 }}
          >
            <Text style={styles.buttonText}>المقابلات</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('league')} 
        >
          <LinearGradient
            colors={getButtonColors('league')} 
            style={styles.gradient}
            start={{ x: 0.7, y: 0 }}
          >
            <Text style={styles.buttonText}>جدول الترتيب</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {selectedButton === 'matches' && <DetailsMatches />} 
        {selectedButton === 'league' && <Detailsclassement/>} 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    marginHorizontal: 1,
    width: 195,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
  },
});
