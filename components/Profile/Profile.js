import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import user from '../../assets/user.png';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#4379F2', '#B0EBB4']}
        start={{ x: 0.7, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Image
            style={styles.profileImage}
            source={user} 
          />
          <Text style={styles.username}>User Name</Text>
         
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20, 
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 85, 
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
