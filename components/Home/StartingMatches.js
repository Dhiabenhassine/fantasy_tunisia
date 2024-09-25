import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function StartingMatches() {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [timeRemaining, setTimeRemaining] = useState('');
  const navigation = useNavigation()

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    const targetDate = new Date('2024-09-21T11:00:00');
    const updateRemainingTime = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeRemaining('The date has passed.');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining(`${days} : ${hours} : ${minutes} `);
    };

    updateRemainingTime();
    const timerId = setInterval(updateRemainingTime, 60000); 

    return () => clearInterval(timerId); 
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4379F2', '#B0EBB4']}
        start={{ x: 0.7, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.logoTextContainer}>
          <Animated.Image
            source={logo}
            style={[styles.logo, { transform: [{ rotate: spin }] }]}
          />
          <Text style={styles.text}>Fantasy Tunisia</Text>
        </View>
        <Text style={styles.text2}>أخر توقيت للانتقلات للجولة 7</Text>
        <Text style={styles.timeRemaining}>{timeRemaining}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeFantasy")}>
          <Text style={styles.buttonText}>التغيرات</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 10,
    top:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
    height: 250,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '116%',
  },
  logoTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    bottom: 40,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  logo: {
    width: 30,
    height: 30,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    bottom: 20,
  },
  timeRemaining: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold', 
    backgroundColor: '#D21312',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    top: 30,
  }
});
