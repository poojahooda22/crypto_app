import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// import Home from '../screens/Home';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
      
    </NavigationContainer>
  )
}

export default App;