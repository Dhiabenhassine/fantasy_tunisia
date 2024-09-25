import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
import React from 'react';
import taraji from '../../assets/taraji.jpeg';
import goal from '../../assets/goal.jpeg';
import assist from '../../assets/assist.jpeg';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeStats() {
  const handleLeagueClick = () => {
    Alert.alert('Selected Stats', `You clicked on `);
  };
  return (
    <LinearGradient
      colors={['#4379F2', '#B0EBB4']}
      start={{ x: 0.7, y: 0 }}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>2024/25 Top Stats</Text>
        <View style={styles.topStatsContainer}>
        <TouchableOpacity style={styles.statCard} onPress={() => handleLeagueClick('Goals')}>
        <Image
              source={goal}
              style={styles.playerImage}

            />
            <Text style={styles.statLabel}>Goals</Text>
            <Text style={styles.statValue}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statCard} onPress={() => handleLeagueClick('Assists')}>
            <Image
              source={assist}
              style={styles.playerImage}
            />
            <Text style={styles.statLabel}>Assists</Text>
            <Text style={styles.statValue}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statCard} onPress={() => handleLeagueClick('Team Goals')}>
            <Image
              source={taraji}
              style={styles.teamImage}
            />
            <Text style={styles.statLabel}>Team Goals</Text>
            <Text style={styles.statValue}>13</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statCard} onPress={() => handleLeagueClick('Clean Sheets')}>
            <Image
              source={taraji}
              style={styles.teamImage}
            />
            <Text style={styles.statLabel}>Clean Sheets</Text>
            <Text style={styles.statValue}>4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          {['Statistics', 'All-time Stats', 'Records', 'Player Comparison', 'PL2 Stats', 'U18 Stats'].map((item) => (
            <TouchableOpacity key={item} style={styles.menuItem} onPress={() => handleLeagueClick('Goals')}>
              <Text style={styles.menuText}>{item}</Text>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  topStatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center', 
    padding: 10,
    width: '48%', 
    marginBottom: 10, 
  },
  playerImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  teamImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  menuText: {
    fontSize: 16,
    color: '#111827',
  },
  arrow: {
    fontSize: 18,
    color: '#6B7280',
  },
});
