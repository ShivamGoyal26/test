import React from "react";
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from "./src/routes/HomeStack";


const App = () => {
  return (
    <NavigationContainer>

      <HomeStack />
    </NavigationContainer>
  )
}

export default App