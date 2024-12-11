// HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Importar animaciones
import logo from '../assets/images/logo.jpg';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Image 
        source={logo} 
        style={styles.logo} 
        animation="fadeInDown" 
        duration={1500} 
      />
      <Animatable.Text 
        style={styles.title} 
        animation="fadeIn" 
        duration={2000}
      >
        Welcome to Caducates!
      </Animatable.Text>
      
      <View style={styles.buttonContainer}>
        {buttonData.map((button, index) => (
          <Animatable.View 
            key={button.id} 
            animation="bounceIn" 
            duration={1500} 
            delay={index * 200} 
            style={styles.buttonWrapper}
          >
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate(button.route)}
            >
              <Text style={styles.buttonText}>{button.text}</Text>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </View>
    </View>
  );
};

// Datos de botones para evitar repetición
const buttonData = [
  { id: 1, text: 'Details', route: 'Details' },
  { id: 2, text: 'Check Caducity', route: 'Caducidad' },
  { id: 3, text: 'Open Scanner', route: 'Scanner' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8', // Color de fondo más suave
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100, // Bordes redondeados
    marginBottom: 20,
  },
  title: {
    fontSize: 32, // Título más grande
    fontWeight: 'bold',
    color: '#4A90E2', // Color del texto del título
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF5C93', // Color más atractivo para los botones
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20, // Texto más grande en los botones
    fontWeight: 'bold',
  },
});

export default HomeScreen;
