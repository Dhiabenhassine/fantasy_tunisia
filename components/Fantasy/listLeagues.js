import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const leagues = [
  { id: '1', name: 'Tunisia League' },
  { id: '2', name: 'Maamoura' },
  { id: '3', name: 'Serie A' },
  { id: '4', name: 'Bundesliga' },
  { id: '5', name: 'Ligue 1' },
];

export default function ListLeagues() {

  const handleLeagueClick = (leagueName) => {
    Alert.alert('Selected League', `You clicked on ${leagueName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Football Leagues</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>League Name</Text>
        </View>
        {leagues.map((league) => (
          <TouchableOpacity 
            key={league.id} 
            style={styles.tableRow} 
            onPress={() => handleLeagueClick(league.name)}
          >
            <Text style={styles.tableRowText}>{league.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    width: 350, 

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  tableRowText: {
    fontSize: 16,
    color: '#333',
  },
});
