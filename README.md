# GitHub Profile Explorer App

Welcome to the GitHub Profile Explorer App repository! This React Native mobile app allows users to register, log in using Firebase authentication, and explore GitHub profiles. The home screen displays a user's GitHub profile information, and users can search for other GitHub usernames to view their details. The app also includes data visualization features, showing a user's most used language, most popular repos, and most forked repos on the "ProfileStats" screen.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Screenshots](#demo-video)
4. [Dependencies](#dependencies)
5. [Setup and Installation](#setup-and-installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Getting Started

To get started with the GitHub Profile Explorer App, follow the instructions in this readme. Make sure you have all the necessary dependencies installed.

## Features

### 1. Authentication
- Users can register and log in using Firebase authentication.

### 2. Home Screen
- Displays the user's GitHub profile information, including repo count, followers, following, and user introduction.

### 3. Search Functionality
- Users can search for other GitHub usernames to view their profile information.
- Displays an error message if the entered username does not match any GitHub user.

### 4. Floating Action Button
- A floating action button with animation serves as the app navigator.
- Users can navigate to the "ProfileStats" screen to view visualizations of their GitHub activity.

### 5. ProfileStats Screen
- Visualizes the user's most used language, most popular repos, and most forked repos using pie and bar charts.

### 6. Logout
- Users can log out from the app using the floating action button.

## Demo Video



https://github.com/ssifu/github-user-stat/assets/63223565/9da2ce58-a301-4574-9cf4-4069af8f216b



## Dependencies

- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- [GitHub API](https://developer.github.com/v3/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

## Setup and Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/ssifu/github-user-stat.git
   ```

2. Install dependencies.
   ```bash
   cd github-user-stat
   npm install
   ```

3. Set up Firebase authentication and configure the Firebase settings in the app.
4. Set up `react-native-reanimated` from their [docs](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

5. Run the app on an emulator or a physical device.
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   # or
   npx expo start
   ```

## Usage

1. Register or log in to the app using Firebase authentication.
2. Explore your GitHub profile on the home screen.
3. Use the search bar to find other GitHub users and view their profiles.
4. Navigate to the "ProfileStats" screen using the floating action button to visualize GitHub activity.
5. Log out from the app using the floating action button.
