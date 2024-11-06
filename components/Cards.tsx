import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface CardProps {
  title: string;
  value: string | number;
  unit: string;
  color?: string; // Opcional para un color personalizado
}

const Cards: React.FC<CardProps> = ({ title, value, unit, color = '#605399' }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.cardTitle, { color }]}>{title}</Text>
      <Text style={styles.cardValue}>
        {value} {unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 150,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 10,
  },
});

export default Cards;
