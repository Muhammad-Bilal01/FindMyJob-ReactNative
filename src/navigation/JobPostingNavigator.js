import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import LoginForCompany from '../screens/jobposting/LoginForCompany';
import SignupForCompany from '../screens/jobposting/SignupForCompany';
import DashboardForCompany from '../screens/jobposting/DashboardForCompany';
import AddJob from '../screens/jobposting/Tabs/AddJob';
import EditJob from '../screens/jobposting/Tabs/EditJob';

const STACK = createStackNavigator();
function JobPostingNavigator() {
  return (
    <STACK.Navigator>
      <STACK.Screen
        name="LoginForCompany"
        component={LoginForCompany}
        options={{headerShown: false}}
      />
      <STACK.Screen
        name="SignupForCompany"
        component={SignupForCompany}
        options={{headerShown: false}}
      />
      <STACK.Screen
        name="DashboardForCompany"
        component={DashboardForCompany}
        options={{headerShown: false}}
      />
      <STACK.Screen
        name="AddJob"
        component={AddJob}
        options={{headerShown: false}}
      />
      <STACK.Screen
        name="EditJob"
        component={EditJob}
        options={{headerShown: false}}
      />
    </STACK.Navigator>
  );
}

export default JobPostingNavigator;
