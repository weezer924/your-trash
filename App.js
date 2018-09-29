import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import GarbageInfoScreen from './src/screens/GarbageInfoScreen';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen'

// ↓これを書かないとエラーが出る
// https://github.com/apollographql/apollo-link/issues/75#issuecomment-333328069
GLOBAL.self = GLOBAL;

const App = createStackNavigator({
  Home: GarbageInfoScreen,
  Camera: CameraScreen,
  // GarbageInfo: GarbageInfoScreen
}, {
  navigationOptions: {
    headerTitle: 'ゴミの名は。',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;