import { View, Text } from 'react-native'
import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './About';
import HomeScreen from './HomeScreen'
import { Icon } from '@rneui/themed'

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
         <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#67B7F4',
            tabBarInactiveTintColor: 'gray',
            // tabBarActiveBackgroundColor :"blue",
            tabBarShowLabel:false,
            tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
               return (
                <Ionicons
                name="md-home"
                size={24}
                // color={focused ? "#006600" : "#8e8e93"}
                color={focused ? '#67B7F4' : 'gray'}
          />
        );

        } 

        else if (route.name === 'About BrandStorm') {
          return (
            <Icon
              name='info'
              type='FontAwesome'
              size={28}
              color={focused ? '#67B7F4' : 'gray'}
            />
          );
        }

        
      },
    })}>

          <Tab.Screen
          name='Home'
          options={{headerShown: false}}
          component={HomeScreen}>
          </Tab.Screen>

          <Tab.Screen
          name='About BrandStorm'
          options={{tabBarBadge: 3 }}
          component={About}>
          </Tab.Screen>

        </Tab.Navigator>
  )
}

export default MainScreen