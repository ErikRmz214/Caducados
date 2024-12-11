import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('');
  const [productName, setProductName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    requestPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
    Alert.alert('Código escaneado', `Datos: ${data}`, [
      { text: 'OK', onPress: () => setScanned(false) },
    ]);
  };

  const handleManualSave = () => {
    if (productName.trim() === '' || expiryDate.trim() === '') {
      Alert.alert('Error', 'Por favor, complete todos los campos antes de guardar.');
      return;
    }
    setData(`Producto: ${productName}, Fecha: ${expiryDate}`);
    setProductName('');
    setExpiryDate('');
    Alert.alert('Guardado', `Producto guardado: ${productName}\nFecha de caducidad: ${expiryDate}`);
  };

  if (hasPermission === null) {
    return <LoadingIndicator message="Solicitando permiso de la cámara..." />;
  }
  if (hasPermission === false) {
    return (
      <Text style={styles.permissionText}>
        No se otorgó permiso para acceder a la cámara
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      </View>
      {scanned && (
        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => setScanned(false)}
          accessibilityLabel="Escanear de nuevo"
        >
          <Text style={styles.scanButtonText}>Escanear de nuevo</Text>
        </TouchableOpacity>
      )}
      <View style={styles.manualInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nombre del producto"
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Fecha de caducidad (YYYY-MM-DD)"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleManualSave}
          accessibilityLabel="Guardar manualmente"
        >
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
      {data !== '' && <DataDisplay data={data} />}
    </View>
  );
}

const LoadingIndicator = ({ message }) => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#FF5722" />
    <Text style={styles.loadingText}>{message}</Text>
  </View>
);

const DataDisplay = ({ data }) => (
  <View style={styles.dataContainer}>
    <Text style={styles.dataText}>Datos guardados:</Text>
    <Text style={styles.dataValue}>{data}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  permissionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  scannerBox: {
    width: 300,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FF5722',
    marginBottom: 20,
  },
  scanner: {
    width: '100%',
    height: '100%',
  },
  scanButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  manualInputContainer: {
    width: '100%',
    marginTop: 20,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  dataContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  dataText: {
    fontSize: 16,
    color: '#333',
  },
  dataValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
});

export default ScannerScreen;
