import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.navLink}>
        <Icon name="file-text-o" size={25} color="black" onPress={()=>navigation.navigate("HomePage")}/>
        <Text style={styles.navLinkText}>Latest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
      <Icon name="key" size={25} color="black" onPress={()=>navigation.navigate("Result")}/>
        <Text style={styles.navLinkText}>FT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="futbol-o" size={25} color="black" onPress={()=>navigation.navigate("HomeFantasy")}/>
        <Text style={styles.navLinkText}>Fantasy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="bar-chart-o" size={25} color="black" onPress={()=>navigation.navigate("HomeStats")}/>
        <Text style={styles.navLinkText}>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink}>
        <Icon name="user" size={25} color="black" onPress={()=>navigation.navigate("Profile")}/>
        <Text style={styles.navLinkText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#CACACA',
    width: '100%',
  },
  navLink: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: '100%',
  },
  navLinkText: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
});

export default Navbar;