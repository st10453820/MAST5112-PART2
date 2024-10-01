This app allows restaurant owners or managers to create and manage a menu. It includes functionality for adding, selecting, and reviewing dishes across different courses (e.g., Starters, Mains, Desserts). Users can select dishes and add them to a menu while keeping track of the total price and number of items selected.

Key Features:
Add Dish: Add new dishes to any course with a name, description, and price.
Select Dishes: Browse and select dishes for each course.
Review Menu: Review selected dishes, view the total number of items and the total price.
Dynamic Menu Creation: After selecting dishes, you can confirm the creation of the menu with an overview of selected items and pricing.
Getting Started
Prerequisites
Ensure you have Node.js and npm installed.
This app requires React Native setup on your machine. Follow the React Native CLI documentation for setting up your development environment.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/restaurant-menu-management-app.git
Navigate to the project directory:

bash
Copy code
cd restaurant-menu-management-app
Install the required dependencies:

bash
Copy code
npm install
Start the app in development mode:

bash
Copy code
npx react-native run-android   # for Android
npx react-native run-ios       # for iOS (MacOS only)
Folder Structure
bash
Copy code
.
├── App.tsx                 # Main app file, sets up navigation
├── screens                 # Contains all the screen components
│   ├── AddDishPage.tsx     # Screen to add a new dish
│   ├── SecondPage.tsx      # Screen to browse and manage courses
│   ├── CourseDetailPage.tsx # Screen to view details of a course and select dishes
│   └── AddMenuPage.tsx     # Screen to review and finalize the menu
├── images                  # Contains static image assets like the chef logo
└── README.md               # This file
App Workflow
Home Screen (Course Selection):
This screen allows users to select a course such as Starters, Mains, or Desserts to explore the available dishes.

Users can also navigate to the "Add Dish" screen to add new dishes to any course.
Course Detail Screen:
Displays all dishes in the selected course.

Users can select or deselect dishes to add them to the final menu.
Selected dishes are highlighted in green.
Add Menu Screen:
This screen shows a summary of all selected dishes along with their prices.

Users can review the total number of selected dishes and the total price.
Upon confirmation, an alert will display the total price and number of items added to the menu.
Add Dish Screen:
A form where users can input details such as the dish name, description, price, and course. After submission, the new dish is added to the selected course.

Screens Explained
1. AddDishPage.tsx
Allows users to input a new dish with its name, description, price, and associated course.
Form validation ensures all fields are filled before the dish can be added.
2. SecondPage.tsx
Displays the available courses (e.g., Mains, Starters, Desserts).
Users can navigate to the Course Detail Screen to view the dishes in each course.
Includes a button to add a new dish by navigating to the Add Dish Screen.
3. CourseDetailPage.tsx
Displays the dishes for a selected course.
Users can tap on a dish to select or deselect it for the menu.
Shows a total price and number of selected items.
4. AddMenuPage.tsx
Shows the list of selected dishes.
Calculates and displays the total price and number of items.
Users can confirm the menu selection.
Navigation
React Navigation:
The app uses React Navigation for screen-to-screen transitions.
Example: From the Second Page (course list), users can navigate to Add Dish or Course Detail screens. After selecting dishes, users can navigate to the Add Menu screen for review.
Adding Dishes to the Menu
From the home screen, select a course (e.g., Starters).
Choose dishes to add by tapping them. Selected dishes will be highlighted.
Navigate to the Add Menu page, where you can see all selected dishes.
Confirm the selection to see the total price and number of dishes.
Customization
Modifying Courses:
You can modify the default courses and dishes in SecondPage.tsx. The defaultDishes object defines the preloaded data.

Styling:
Styles are defined using StyleSheet.create() and are easy to customize in each component file. To change the color scheme, button styles, or text, modify the styles objects in the respective files.

Future Enhancements
Dish Images: Add an image upload feature to each dish.
Animations: Add transitions and animations when selecting or deselecting dishes.
Data Persistence: Save the selected menu to local storage or sync it with a backend to make the data persistent.
Conclusion
This app provides a flexible and simple solution for managing restaurant menus. The app allows for easy dish selection, with real-time price calculations and a user-friendly interface for managing different courses. Whether you're adding a new dish or reviewing the final menu, this app makes menu management straightforward and efficient.

