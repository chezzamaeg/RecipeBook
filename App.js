import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import RecipeListScreen from './RecipeListScreen';
import RecipeDetailsScreen from './RecipeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Recipe Book' }}
        />

        <Stack.Screen
          name="Recipes"
          component={RecipeListScreen}
          options={{ title: 'Recipes' }}
        />

        <Stack.Screen
          name="Details"
          component={RecipeDetailsScreen}
          options={{ title: 'Recipe Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}