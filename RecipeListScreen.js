import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './GlobalStyles';
import { recipes } from './Data';

export default function RecipeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('Details', {
                name: item.name,
                time: item.time,
                description: item.description,
              })
            }
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardMeta}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
}