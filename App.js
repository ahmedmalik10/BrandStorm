import * as React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './screens/EntryScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainScreen from './screens/MainScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator> 


        <Stack.Screen 
        name="BrandStorm" 
        component={EntryScreen} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{headerShown: false}}
        />

        <Stack.Screen 
        options={{headerShown: false}}
        name="SignupScreen" 
        component={SignupScreen} 
        />

        <Stack.Screen 
        options={{headerShown: false}}
        name="MainScreen" 
        component={MainScreen} 
        />

        <Stack.Screen 
        name="ForgotPasswordScreen" 
        options={{headerShown: false}}
        component={ForgotPasswordScreen} 
        />

        <Stack.Screen 
        name="ResetPasswordScreen" 
        options={{headerShown: false}}
        component={ResetPasswordScreen} 
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

