import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';
import Navbar from '../Navbar';
import ligue from '../../assets/LIGUE.jpg';
import logo from '../../assets/logo.png';
import Feature from './Feature';
import Matchs from './matchs';
const HomePage = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true, 
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Fantasy</Text>
        <Animated.Image
          source={logo}
          style={[styles.logo, { transform: [{ rotate: spin }] }]}
        />
        <Text style={styles.text}>Tunisia</Text>
      </View>
      <Image source={ligue} style={styles.image} />
      <Feature />
      <Matchs/>
      <Navbar />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  image: {
    width: 390,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
});
