import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import reseptit from './Components/Reseptit'
export default function App() {
  const Tab = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Reseptit" component={reseptit} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
