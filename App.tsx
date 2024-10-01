import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SecondPage from './SecondPage'; // Ensure this path is correct
import AddDishPage from './AddDishPage'; // Ensure this path is correct
import CourseDetailPage from './course'; // Ensure this path is correct
import AddMenuPage from './addmenu'; // Import AddMenuPage

// Define the stack's route names and their associated parameters
type RootStackParamList = {
  SecondPage: undefined;
  AddDishPage: undefined;
  CourseDetailPage: { course: string; dishes: { name: string; description: string; price: number }[] }; // Updated type
  AddMenuPage: { selectedDishes: { name: string; description: string; price: number }[] }; // AddMenuPage parameter
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SecondPage">
        <Stack.Screen 
          name="SecondPage" 
          component={SecondPage} 
          options={{ title: 'Select Course' }} // Optional: Customize the header title
        />
        <Stack.Screen 
          name="AddDishPage" 
          component={AddDishPage} 
          options={{ title: 'Add Dish' }} // Optional: Customize the header title
        />
        <Stack.Screen 
          name="CourseDetailPage" 
          component={CourseDetailPage} 
          options={{ title: 'Course Details' }} // Optional: Customize the header title
        />
        <Stack.Screen 
          name="AddMenuPage" 
          component={AddMenuPage} 
          options={{ title: 'Add Menu' }} // Optional: Customize the header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

