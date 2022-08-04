import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './src/components/Home/';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/components/LoginPage';

const Stack = createStackNavigator();

function MyStack() {
 return (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginPage} />
     <Stack.Screen name="Home" component={Home} />

   </Stack.Navigator>
  );
}


export default function App() {
  return (

  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

