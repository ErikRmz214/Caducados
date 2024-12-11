import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Simulación de datos de productos y fechas de caducidad
const productos = [
  { nombre: 'Tomate', caducidad: new Date(2024, 10, 8) },
  { nombre: 'Chile', caducidad: new Date(2024, 10, 1) },
  { nombre: 'Leche', caducidad: new Date(2024, 12, 10) },
  { nombre: 'Pan', caducidad: new Date(2024, 10, 31) },
  { nombre: 'Queso', caducidad: new Date(2024, 10, 2) },
];

// Función para calcular la diferencia de días entre la fecha actual y la fecha de caducidad
const calcularDiasRestantes = (fechaCaducidad) => {
  const hoy = new Date();
  const diffTime = fechaCaducidad - hoy;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
};

// Componente para mostrar el semáforo de colores
const Semaforo = ({ diasRestantes }) => {
  let color = 'green';
  if (diasRestantes <= 3) {
    color = 'red';
  } else if (diasRestantes <= 7) {
    color = 'yellow';
  }
  return <View style={[styles.semaforo, { backgroundColor: color }]} />;
};

function CadScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {productos.map((producto, index) => {
        const diasRestantes = calcularDiasRestantes(producto.caducidad);
        return (
          <View key={index} style={styles.productoContainer}>
            <Text style={styles.textoProducto}>{producto.nombre}</Text>
            <Semaforo diasRestantes={diasRestantes} />
            <Text style={styles.diasTexto}>
              {diasRestantes > 0 ? `${diasRestantes} días para caducar` : 'Producto caducado'}
            </Text>
            {diasRestantes <= 7 && (
              <Text style={styles.receta}>
                {producto.nombre === 'Chile' ? 'Receta sugerida: Salsa de Chile' : 
                 producto.nombre === 'Leche' ? 'Receta sugerida: Batido de leche' :
                 producto.nombre === 'Tomate' ? 'Receta sugerida: Ensalada de tomate' : 
                 'Receta sugerida: Usa pronto'}
              </Text>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
  },
  productoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoProducto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
  },
  diasTexto: {
    fontSize: 16,
    color: '#495057',
    marginTop: 5,
  },
  semaforo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 15,
    borderWidth: 3,
    borderColor: '#ced4da',
  },
  receta: {
    marginTop: 10,
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CadScreen;
