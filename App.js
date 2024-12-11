import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import CadScreen from './src/screens/CadScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Drawer = createDrawerNavigator();

export function App() {
  return (
    <NavigationContainer>
      {/* Cambiamos la pantalla inicial a Login */}
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Scanner" component={ScannerScreen} />
        <Drawer.Screen name="Caducidad" component={CadScreen} />
        <Drawer.Screen name="Calendar" component={CalendarScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
