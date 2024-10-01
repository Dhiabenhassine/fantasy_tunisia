import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import terrain from '../../assets/terrain.png';
import { LinearGradient } from 'expo-linear-gradient';

const TeamDetail = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#4379F2', '#B0EBB4']} 
      style={styles.gradient}
      start={{ x: 0.7, y: 0 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeFantasy")}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Pick Team</Text>
          <Text style={styles.subHeaderText}>Gameweek 6 Deadline: samedi 28 sept., 11:00</Text>
        </View>

        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navText}>Squad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.inactiveNavButton]}>
            <Text style={styles.navText}>List</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boostContainer}>
          <TouchableOpacity style={styles.boostButton}>
            <Text style={styles.boostText}>Bench Boost</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boostButton}>
            <Text style={styles.boostText}>Free Hit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boostButton}>
            <Text style={styles.boostText}>Triple Captain</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.boostImage} source={terrain} resizeMode="cover" />

          <View style={styles.playerGrid}>
            <View style={styles.playerRow}>
            <TouchableOpacity>
              <PlayerItem name="Martinez" team="IPS (A)" position="GKP" />
              </TouchableOpacity>
            </View>

            <View style={styles.playerRow}>
            <TouchableOpacity>
              <PlayerItem name="Gabriel" team="LEI (H)" position="DEF" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Cucurella" team="BHA (H)" position="DEF" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Dunk" team="CHE (A)" position="DEF" />
              </TouchableOpacity>
            </View>

            <View style={styles.playerRow}>
            <TouchableOpacity>
              <PlayerItem name="Luis Diaz" team="WOL (A)" position="MID" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Son" team="MUN (A)" position="MID" captain="VC" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Souček" team="BRE (A)" position="MID" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Eze" team="EVE (A)" position="MID" />
              </TouchableOpacity>
            </View>

            <View style={styles.playerRow}>
            <TouchableOpacity>
              <PlayerItem name="Watkins" team="IPS (A)" position="FOR" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Haaland" team="NEW (A)" position="FOR" captain="C" />
              </TouchableOpacity>
              <TouchableOpacity>
              <PlayerItem name="Jackson" team="BHA (H)" position="FOR" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const PlayerItem = ({ name, team, position, captain }) => (
  <View style={styles.playerContainer}>
    <Text style={styles.playerName}>{name}</Text>
    <Text style={styles.team}>{team}</Text>
    {captain && <Text style={styles.captain}>{captain}</Text>}
  </View>
);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: 'white',
    fontSize: 14,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  inactiveNavButton: {
    backgroundColor: '#DDDDDD',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  boostButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  boostText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  boostImage: {
    width: '100%',
    height: 450,
    position: 'absolute',
    top: '7%',
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  playerGrid: {
    paddingHorizontal: 10,
    position: 'absolute',
    top: '10%',
    width: '100%',
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  playerContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white',
  },
  team: {
    fontSize: 14,
    color: 'white',
  },
  captain: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default TeamDetail;
