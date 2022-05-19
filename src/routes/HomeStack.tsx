import React, {useContext} from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createSharedElementStackNavigator, SharedElement} from "react-navigation-shared-element"

import List from '../containers/List';
import ListDetail from '../containers/ListDetail';


const Stack = createSharedElementStackNavigator();

const HomeStack = () => {

  return (
    <>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListDetail" component={ListDetail} />

      </Stack.Navigator>
    </>
  );
};

export default HomeStack;

