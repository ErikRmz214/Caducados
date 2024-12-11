// components/TrafficLight.jsx
import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const TrafficLight = ({ color }) => {
  const animatedValue = new Animated.Value(0);

  // Función para hacer que el tráfico "parpadee" al cambiar de color
  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
      { iterations: 1 }
    ).start();
  };

  // Iniciar la animación al renderizar
  React.useEffect(() => {
    startAnimation();
  }, [color]);

  // Estilo animado para el tráfico
  const animatedStyle = {
    opacity: animatedValue,
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[styles.light, { backgroundColor: color }, animatedStyle]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    width: 50, // Tamaño más grande para mayor visibilidad
    height: 50,
    borderRadius: 25,
    marginTop: 10,
    borderWidth: 3, // Aumentar el grosor del borde
    borderColor: '#333', // Borde para mayor definición
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});

export default TrafficLight;
