// DetailScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text 
        style={styles.title} 
        animation="fadeIn" 
        duration={1500}
      >
        Details Screen
      </Animatable.Text>

      <Animatable.View 
        style={styles.card} 
        animation="zoomIn" 
        duration={1500}
      >
        <Text style={styles.cardText}>Detail information goes here...</Text>
        <Text style={styles.cardText}>Additional information...</Text>
      </Animatable.View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => alert('More details coming soon!')}
      >
        <Text style={styles.buttonText}>More Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8', // Color de fondo más suave
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A90E2', // Color del título
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFAFA', // Fondo suave
    padding: 20,
    borderRadius: 15, // Bordes más redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20, // Espacio entre la tarjeta y el botón
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10, // Espacio entre textos
    textAlign: 'center', // Centrar texto en la tarjeta
  },
  button: {
    backgroundColor: '#FF5C93', // Color atractivo para el botón
    padding: 15,
    borderRadius: 15, // Bordes más redondeados
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
