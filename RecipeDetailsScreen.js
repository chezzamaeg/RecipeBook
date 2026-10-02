import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles';

export default function RecipeDetailsScreen({ route, navigation }) {
  const { name, time, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.cardMeta}>Cook time: {time}</Text>
      <Text style={styles.body}>{description}</Text>
      <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to recipes</Text>
      </TouchableOpacity>
    </View>
  );
}