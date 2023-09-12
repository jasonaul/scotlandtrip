import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EdinburghScreen from '../screens/Destinations/EdinburghScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EdinburghScreen" component={EdinburghScreen} />
      {/* Additional screens can be uncommented as required */}
      {/* 
      <Stack.Screen name="GlasgowScreen" component={GlasgowScreen} />
      <Stack.Screen name="YorkScreen" component={YorkScreen} />
      <Stack.Screen name="OxfordScreen" component={OxfordScreen} />
      <Stack.Screen name="CotswoldsScreen" component={CotswoldsScreen} /> 
      */}
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      {/* Drawer items such as Itinerary, Hotels, etc. can be added here */}
    </Drawer.Navigator>
  );
}
