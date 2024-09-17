import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logo from '../assets/logo.png'; 

const StartPage = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const scaleAnim = useRef(new Animated.Value(0.5)).current; 
  const navigation = useNavigation(); 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[styles.logo, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        Fantasy Tunisia
      </Animated.Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('HomePage')} // Navigate to HomePage
      >
        <Text style={styles.buttonText}>Start Fantasy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white', 
  },
  logo: {
    bottom: 74, 
    width: 450, 
    height: 450, 
    resizeMode: 'contain', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    top: -94
  },
  button: {
    backgroundColor: '#D21312',
    borderTopLeftRadius: 55, 
    borderTopRightRadius: 25, 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 55, 
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
