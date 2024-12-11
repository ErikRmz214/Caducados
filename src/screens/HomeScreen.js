import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import logo from '../images/logo.png'; // Asegúrate de que la imagen esté en la ruta correcta

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
              onPress={() => navigation.navigate(button.route)} // Navegar a la pantalla correcta
              accessible={true}
              accessibilityLabel={button.text}
            >
              <Text style={styles.buttonText}>{button.text}</Text>
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </View>
    </View>
  );
};

// Datos de botones con las rutas que coinciden con las pantallas del Drawer
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
    backgroundColor: '#F0F4F8', // Cambié el color de fondo a un tono más suave
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3A9BD5', // Cambié el color a un azul más oscuro
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
    backgroundColor: '#FF6F61', // Cambié el color del botón a un coral
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    transform: [{ scale: 1 }], // Para la animación de pulsar
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
