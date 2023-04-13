import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetLocationScreen from 'screens/LocationScreen';
import HomeScreen from '@screens/HomeScreen';
import SettingsScreen from '@screens/SettingsScreen';
import SensorScreen from '@screens/SensorsScreen';

import { HomeIcon, SettingsIcon, LocationIcon } from '@components/Icons';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'Settings') {
            return <SettingsIcon color={color} size={size} />;
          }

          if (route.name === 'Location' || route.name === 'Sensors') {
            return <LocationIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Location" component={GetLocationScreen} />
      <Tab.Screen name="Sensors" component={SensorScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
