import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const scanHistory = [
  { id: '1', name: 'Product 1', expirationDate: '2024-12-01' },
  { id: '2', name: 'Product 2', expirationDate: '2024-11-15' },
];

const ScanHistoryScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.name}</Text>
      <Text style={styles.cardText}>Expires on: {item.expirationDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>
      <FlatList
        data={scanHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false} // Ocultar el scrollbar vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFAFA',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ScanHistoryScreen;
