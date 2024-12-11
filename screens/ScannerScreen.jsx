import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message'; // Importar Toast
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScannerScreen = () => {
  const [loading, setLoading] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleScan = () => {
    setLoading(true);
    // Simular escaneo
    setTimeout(() => {
      setLoading(false);
      Toast.show({
        text1: 'Scan Successful!',
        type: 'success',
      });
    }, 2000);
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.9, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open Scanner</Text>
      {loading && <ActivityIndicator size="large" color="#FF5C93" />}
      <TouchableOpacity
        style={[styles.scanButton, { transform: [{ scale: scaleAnim }] }]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handleScan}
      >
        <Ionicons name="camera" size={20} color="#FFFFFF" />
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: '#FF5C93',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Añadir un poco de margen al texto
  },
});

export default ScannerScreen;
