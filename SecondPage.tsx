import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from './App';

type SecondPageNavigationProp = DrawerNavigationProp<RootStackParamList, 'SecondPage'>;

const defaultDishes = {
  Mains: [
    { name: 'Beef Steak', description: 'Tender beef steak with pepper sauce', price: 180 },
  ],
  Starters: [
    { name: 'Spring Rolls', description: 'Crispy rolls filled with vegetables', price: 50 },
    { name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 40 },
  ],
  Desserts: [
    { name: 'Chocolate Cake', description: 'Rich chocolate cake', price: 70 },
    { name: 'Ice Cream', description: 'Creamy vanilla ice cream', price: 30 },
  ],
};

const SecondPage: React.FC = () => {
  const navigation = useNavigation<SecondPageNavigationProp>();

  const [dishes, setDishes] = useState(defaultDishes); // Update setDishes

  const handleAddDish = (newDish: { name: string; description: string; price: number; category: string }) => {
    const { name, description, price, category } = newDish;

    // Update the state with the new dish
    setDishes((prevDishes) => ({
      ...prevDishes,
      [category]: [...prevDishes[category], { name, description, price: parseFloat(price) }],
    }));

    Alert.alert('Dish Added', `${name} has been added to ${category}.`);
  };

  const navigateToAddDish = () => {
    // Pass the handleAddDish callback when navigating to AddDishPage
    navigation.navigate('AddDishPage', {
      onDishAdded: handleAddDish,
    });
  };

  const handleCourseSelect = (course: string) => {
    navigation.navigate('CourseDetailPage', {
      course,
      dishes: dishes[course],
    });
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image source={require('./images/chef.png')} style={styles.logo} />

      <TouchableOpacity style={styles.menuButton} onPress={() => {/* Handle menu open */}}>
        <Ionicons name="menu" size={40} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Explore Our Courses</Text>

      {/* FlatList for displaying courses */}
      <FlatList
        data={Object.keys(dishes)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.courseButton} onPress={() => handleCourseSelect(item)}>
            <Text style={styles.courseButtonText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        style={styles.courseList}
      />

      {/* Add Dish Button at the bottom */}
      <TouchableOpacity style={styles.addButton} onPress={navigateToAddDish}>
        <Ionicons name="add-circle" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000', // Black background
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Add some space between the logo and other elements
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  courseButton: {
    backgroundColor: '#808080', // Gray background for the course button
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  courseButtonText: {
    color: '#fff', // Text color inside the button
    fontSize: 18,
  },
  courseList: {
    width: '100%',
    marginTop: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#808080', // Gray background for the Add button
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff', // Title color
    marginBottom: 20,
  },
});
