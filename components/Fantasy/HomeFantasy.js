import { View, Text, Animated, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../../assets/logo.png'; 
import League from './league';
import { useNavigation } from '@react-navigation/native';
export default function HomeFantasy() {
  const spinValue = useRef(new Animated.Value(0)).current;
  const slideValue = useRef(new Animated.Value(0)).current;
  const slideTunisiaValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation()

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(slideValue, {
            toValue: -100,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(slideValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),

          Animated.timing(slideTunisiaValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(slideTunisiaValue, {
            toValue: 100,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(slideTunisiaValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [spinValue, slideValue, slideTunisiaValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#4379F2', '#B0EBB4']} 
          style={styles.gradient}
          start={{ x: 0.7, y: 0 }}
        >
          <View style={styles.header}>
            <Animated.Text style={[styles.text, { transform: [{ translateX: slideValue }] }]}>
              Fantasy
            </Animated.Text>
            <Animated.Image
              source={logo}
              style={[styles.logo, { transform: [{ rotate: spin }] }]}
            />
            <Animated.Text style={[styles.text, { transform: [{ translateX: slideTunisiaValue }] }]}>
              Tunisia
            </Animated.Text>
          </View>
          <TouchableOpacity style={styles.centerUser} onPress={()=>navigation.navigate("Profile")}>
            <Text style={styles.user}>Name User</Text>
            <Icon name="long-arrow-right" size={25} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box1}>
            <Text style={styles.number}>63</Text>
            <Text style={styles.points}>points</Text>
            <Icon name="long-arrow-right" size={25} color="black" style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.view2}>
            <Text style={styles.week}>Game Week</Text>
            <View style={styles.view3}>
              <TouchableOpacity style={styles.box3} onPress={() => { navigation.navigate('TeamDetail')}}>
                <Text style={styles.team}>Team</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box4}>
                <Text style={styles.transfert}>Transfert</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box5}>
            <Text style={styles.leagues}>Leagues</Text>
            <View>
              <League />
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 40,
  },
  scrollViewContent: {
    // Styles for scroll view content
  },
  gradient: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  centerUser: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    paddingHorizontal: '22%', 
    paddingVertical: '4%', 
    borderRadius: 10, 
  },
  user: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    paddingHorizontal: '35%', 
    paddingVertical: '15%', 
    borderRadius: 10, 
  },
  number: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
  },
  points: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  week: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute', 
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'black',
    color: 'white',
    width:150,
    textAlign: 'center',
  },
  view2: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    paddingHorizontal: '5%', 
    paddingVertical: '15%', 
    borderRadius: 10, 
    position: 'relative', 
  },
  view3: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '86%',
    paddingHorizontal: 10,
  },
  box3: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    borderRadius: 10, 
    paddingVertical: 10,
  },
  box4: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    borderRadius: 10, 
    paddingVertical: 10,
  },
  team: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  transfert: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  leagues: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute', 
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'black',
    color: 'white',
    width:150,
    textAlign: 'center',
  },
  box5: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    paddingHorizontal: '44%', 
    paddingVertical: '15%', 
    borderRadius: 10, 
    position: 'relative', 
    paddingBottom: 10,
  },
});
