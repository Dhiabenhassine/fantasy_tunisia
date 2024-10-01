import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import ListLeagues from './listLeagues';

export default function League() {
  const [modalVisible, setModalVisible] = useState(false); 
  const [leagueName, setLeagueName] = useState(''); 
  const [leagues, setLeagues] = useState([]); 

  // Load leagues from AsyncStorage when component mounts
  useEffect(() => {
    const loadLeagues = async () => {
      try {
        const storedLeagues = await AsyncStorage.getItem('leagues');
        if (storedLeagues !== null) {
          setLeagues(JSON.parse(storedLeagues)); // Parse and set leagues from local storage
        }
      } catch (error) {
        console.error('Error loading leagues:', error);
      }
    };
    loadLeagues();
  }, []);

  // Save the league name and store it in AsyncStorage
  const handleAddLeague = async () => {
    if (leagueName.trim() === '') {
      Alert.alert('Error', 'League name cannot be empty!');
      return;
    }

    const updatedLeagues = [...leagues, leagueName];

    try {
      await AsyncStorage.setItem('leagues', JSON.stringify(updatedLeagues)); // Save updated leagues to local storage
      setLeagues(updatedLeagues);
      setLeagueName('');
      setModalVisible(false);
    } catch (error) {
      console.error('Error saving league:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
        <Icon name="plus" size={20} color="black" style={styles.icon} />
        <Text style={styles.text}>League</Text>
      </TouchableOpacity>

      {/* List of Leagues */}
      <ListLeagues leagues={leagues} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add New League</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter league name"
              value={leagueName}
              onChangeText={setLeagueName}
            />
            <View style={styles.buttonContainer}>
              <Button title="Add" onPress={handleAddLeague} color='#B0EBB4'/>
              <Button title="Cancel" onPress={() => setModalVisible(false)} color="#4379F2" />
            </View>
          </View>
        </View>
      </Modal>
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
    left: '23%',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4379F2',
    borderWidth: 1,                
    paddingVertical: 2,            
    borderRadius: 5,  

  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
