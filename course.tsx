import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

type CourseDetailProps = {
  route: {
    params: {
      course: string;
      dishes: { name: string; description: string; price: number }[];
    };
  };
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
};

const CourseDetailPage: React.FC<CourseDetailProps> = ({ route, navigation }) => {
  const { course, dishes } = route.params;
  const [selectedDishes, setSelectedDishes] = useState<{ name: string; description: string; price: number }[]>([]);

  const handleDishSelect = (dish: { name: string; description: string; price: number }) => {
    setSelectedDishes((prev) => {
      if (prev.some(selectedDish => selectedDish.name === dish.name)) {
        Alert.alert('Already Selected', `${dish.name} is already selected.`);
        return prev;
      }
      return [...prev, dish];
    });
    Alert.alert('Dish Selected', `You selected ${dish.name}`);
  };

  const handleAddToMenu = () => {
    if (selectedDishes.length === 0) {
      Alert.alert('No Dishes Selected', 'Please select at least one dish.');
      return;
    }
    navigation.navigate('AddMenuPage', { selectedDishes });
  };

  const totalPrice = selectedDishes.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course}</Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.dishContainer} onPress={() => handleDishSelect(item)}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            <Text style={styles.dishPrice}>Price: R{item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addToMenuButton} onPress={handleAddToMenu}>
        <Text style={styles.addToMenuButtonText}>Add to Menu</Text>
      </TouchableOpacity>
      <Text style={styles.totalPrice}>Total Price: R{totalPrice.toFixed(2)}</Text>
      {dishes.length === 0 && <Text style={styles.noDishesText}>No dishes added yet.</Text>}
    </View>
  );
};

export default CourseDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Darker background for modern look
  },
  title: {
    fontSize: 26, // Slightly larger title for emphasis
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // White title for contrast
    textAlign: 'center',
    letterSpacing: 1, // Add letter spacing for a polished look
  },
  dishContainer: {
    marginVertical: 10,
    padding: 15, // Increased padding for a better touch target
    borderWidth: 1,
    borderColor: '#444', // Darker gray border
    borderRadius: 8, // Increased border radius for smoother edges
    backgroundColor: '#1c1c1c', // Darker background for dishes
  },
  dishName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff', // Dish name in white for contrast
  },
  dishDescription: {
    fontSize: 14,
    color: '#aaa', // Light gray for dish description
    marginVertical: 5, // Add vertical spacing between elements
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ddd', // Gray for price to stand out more subtly
  },
  addToMenuButton: {
    backgroundColor: '#28A745', // Green button for "Add to Menu"
    paddingVertical: 15, // Increased padding for touchable area
    borderRadius: 10, // Rounded corners for button
    marginTop: 20,
    alignItems: 'center',
    elevation: 3, // Add subtle shadow for depth
  },
  addToMenuButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#fff', // White text for the total price
  },
  noDishesText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
