// src/components/BottomNavigationBar.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text>Home Screen</Text>
  </View>
);

const SearchScreen = () => (
  <View style={styles.screen}>
    <Text>Search Screen</Text>
  </View>
);

const NotificationsScreen = () => (
  <View style={styles.screen}>
    <Text>Notifications Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text>Profile Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Initialize iconName with a default value
          let iconName: string = '';

          // Set the iconName based on the route
          if (route.name === 'Home') {
            iconName = '🏠'; // Home icon
          } else if (route.name === 'Search') {
            iconName = '🔍'; // Search icon
          } else if (route.name === 'Notifications') {
            iconName = '🔔'; // Notifications icon
          } else if (route.name === 'Profile') {
            iconName = '👤'; // Profile icon
          }

          return <Text style={{ fontSize: size, color: color }}>{iconName}</Text>;
        },
        tabBarActiveTintColor: '#6200ea', 
        tabBarInactiveTintColor: 'gray', // Cor do ícone inativo
        tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0 }, // Estilo da barra de navegação
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomNavigationBar;

