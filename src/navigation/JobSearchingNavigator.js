import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import Main from '../screens/jobSearching/Main';

const Stack = createStackNavigator();

function JobSearchingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Main'}
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default JobSearchingNavigator;
