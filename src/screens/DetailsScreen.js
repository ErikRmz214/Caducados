import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// Componente para mostrar detalles del producto
function DetailsScreen({ route }) {
  const { 
    nombre = 'Producto sin nombre', 
    caducidad = '', 
    descripcion = 'Sin descripción disponible', 
    imagen = 'https://via.placeholder.com/150' 
  } = route.params || {};

  // Convertir la fecha de caducidad a formato legible y calcular días restantes
  const fechaCaducidad = caducidad ? new Date(caducidad) : null;
  const fechaCaducidadLegible = fechaCaducidad ? fechaCaducidad.toLocaleDateString() : 'Sin fecha';
  
  const diasRestantes = fechaCaducidad 
    ? Math.ceil((fechaCaducidad - new Date()) / (1000 * 60 * 60 * 24)) 
    : null;

  // Asignar color según proximidad de la fecha de caducidad
  const obtenerColorCaducidad = () => {
    if (diasRestantes === null) return '#ccc';
    if (diasRestantes <= 3) return '#ff4d4d'; // Rojo para cercano
    if (diasRestantes <= 7) return '#ffcc00'; // Amarillo para moderado
    return '#4CAF50'; // Verde para lejano
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Imagen del producto */}
        <Image source={{ uri: imagen }} style={styles.productImage} />
        
        <View style={styles.textContainer}>
          <Text style={styles.productName}>{nombre}</Text>
          <Text style={styles.productDescription}>{descripcion}</Text>
          <Text style={[styles.caducidad, { color: obtenerColorCaducidad() }]}>
            Fecha de caducidad: {fechaCaducidadLegible} ({diasRestantes !== null ? `${diasRestantes} días restantes` : 'N/A'})
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  caducidad: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default DetailsScreen;
