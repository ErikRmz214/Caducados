import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

// Datos simulados de productos
const productos = {
  '2024-11-28': { nombre: 'Tomate', caducidad: '2024-11-28' },
  '2024-11-01': { nombre: 'Chile', caducidad: '2024-11-01' },
  '2024-11-05': { nombre: 'Leche', caducidad: '2024-11-05' },
  '2024-12-01': { nombre: 'Zanahoria', caducidad: '2024-12-01' },
  '2024-12-05': { nombre: 'Manzana', caducidad: '2024-12-05' },
};

// Función para calcular los días restantes hasta la fecha de caducidad
const calcularDiasRestantes = (fechaCaducidad) => {
  const hoy = new Date();
  const fecha = new Date(fechaCaducidad);
  const diffTime = fecha - hoy;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Función para generar los marcadores de fechas en el calendario con colores basados en los días restantes
const obtenerFechasCaducidad = () => {
  const fechas = {};
  Object.keys(productos).forEach((fecha) => {
    const diasRestantes = calcularDiasRestantes(productos[fecha].caducidad);
    let dotColor = 'green';
    if (diasRestantes <= 3) {
      dotColor = 'red';
    } else if (diasRestantes <= 7) {
      dotColor = 'yellow';
    }

    fechas[fecha] = {
      marked: true,
      dotColor,
      activeOpacity: 0.7,
    };
  });
  return fechas;
};

function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caducidad de Productos</Text>
      
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={obtenerFechasCaducidad()}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          selectedDayBackgroundColor: '#4CAF50', // Color del día seleccionado
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#FF5722', // Color del día de hoy
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          arrowColor: '#FF5722', // Color de las flechas
          monthTextColor: '#FF5722', // Color del mes
          indicatorColor: '#FF5722',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />
      
      {selectedDate && (
        <View style={styles.productInfo}>
          <Text style={styles.productText}>
            Producto: {productos[selectedDate]?.nombre || 'Ningún producto'}
          </Text>
          <Text style={styles.productText}>
            Fecha de Caducidad: {selectedDate}
          </Text>
          <Text style={[styles.productText, { color: productos[selectedDate]?.caducidad ? calcularDiasRestantes(productos[selectedDate].caducidad) <= 3 ? 'red' : calcularDiasRestantes(productos[selectedDate].caducidad) <= 7 ? 'orange' : 'green' : 'black' }]}>
            Días restantes: {calcularDiasRestantes(productos[selectedDate]?.caducidad)}
          </Text>
        </View>
      )}

      {selectedDate && (
        <TouchableOpacity style={styles.clearButton} onPress={() => setSelectedDate('')}>
          <Text style={styles.clearButtonText}>Borrar Selección</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF5722',
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 20,
  },
  productInfo: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 20,
  },
  productText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  clearButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  clearButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CalendarScreen;
