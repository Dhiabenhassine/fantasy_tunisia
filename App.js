import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from './components/StartPage';
import HomePage from './components/Home/HomePage';
import { StatusBar } from 'expo-status-bar';

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
            options={{ headerShown: false }} // Set this to true if you want the header to be shown
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
