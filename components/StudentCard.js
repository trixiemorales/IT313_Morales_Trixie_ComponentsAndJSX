import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Course: {course}</Text>
      <Text style={styles.info}>Units Enrolled: {units}</Text>
      
      {/* Conditionally render "Full Load" label if isFullLoad is true */}
      {isFullLoad && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Full Load</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333333',
  },
  info: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  badge: {
    marginTop: 8,
    backgroundColor: '#4CAF50',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});