// CaducidadScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TrafficLight from '../components/TrafficLight';

const products = [
  { id: '1', name: 'Product 1', expirationDate: '2024-12-01' },
  { id: '2', name: 'Product 2', expirationDate: '2024-11-15' },
  { id: '3', name: 'Product 3', expirationDate: '2024-10-10' },
];

// Función para determinar el color basado en la fecha de expiración
const getColor = (date) => {
  const today = new Date();
  const expirationDate = new Date(date);
  const diffTime = expirationDate - today;

  if (diffTime < 0) return 'red'; // Expirado
  if (diffTime < 7 * 24 * 60 * 60 * 1000) return 'yellow'; // Menos de una semana
  return 'green'; // Más de una semana
};

const CaducidadScreen = () => {
  // Renderizar cada producto
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardText}>Expires on: {item.expirationDate}</Text>
      <TrafficLight color={getColor(item.expirationDate)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Expiration Dates</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8', // Color de fondo más suave
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 20,
    textAlign: 'center', // Centrar el título
  },
  card: {
    backgroundColor: '#FFFAFA', // Fondo suave
    padding: 15,
    borderRadius: 15, // Bordes más redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 15, // Espaciado entre tarjetas
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5, // Espaciado entre textos
  },
});

export default CaducidadScreen;
