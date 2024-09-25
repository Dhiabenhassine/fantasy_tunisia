import React from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './components/StartPage';
import HomePage from './components/Home/HomePage';
import { StatusBar, View, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import Result from './components/Results/Result';
import HomeFantasy from './components/Fantasy/HomeFantasy';
import HomeStats from './components/Stats/HomeStats';
import Profile from './components/Profile/Profile';
const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartPage">
          <Stack.Screen 
            name="StartPage" 
            component={StartPage} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="HomePage" 
            component={HomePage} 
            options={{ headerShown: false }} 
          />
             <Stack.Screen 
            name="Result" 
            component={Result} 
            options={{ headerShown: false }} 
          />
               <Stack.Screen 
            name="HomeFantasy" 
            component={HomeFantasy} 
            options={{ headerShown: false }} 
          />
                <Stack.Screen 
            name="HomeStats" 
            component={HomeStats} 
            options={{ headerShown: false }} 
          />
                 <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
        <CurrentNavbar />
      </NavigationContainer>
    </>
  );
};

const CurrentNavbar = () => {
  const state = useNavigationState(state => state); 
  
  if (!state) {
    return null;
  }

  const currentRouteIndex = state.index; 
  const currentRouteName = state.routeNames[currentRouteIndex]; 

  return currentRouteName !== 'StartPage' ? (
    <View style={styles.navbarContainer}>
      <Navbar />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute', 
    top: 740,              
    left: 0,
    right: 0,
    zIndex: 1000,        
  },
});

export default App;
