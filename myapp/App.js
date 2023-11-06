import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Src/LoginScreen';
import SignupScreen from './Src/SignupScreen';
import HomeScreen from './Src/HomeScreen';

const Stack = createStackNavigator();


function App() {
  // Implement authentication logic here to decide whether to show the Home screen
  // or redirect to the Login screen

  // For this example, let's assume the user is not authenticated initially
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
