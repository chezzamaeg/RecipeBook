
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Recipe Book</Text>

      <Text style={styles.subtitle}>
        Simple recipes for every day.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Recipes')}
      >
        <Text style={styles.buttonText}>Browse recipes</Text>
      </TouchableOpacity>
    </View>
  );
}