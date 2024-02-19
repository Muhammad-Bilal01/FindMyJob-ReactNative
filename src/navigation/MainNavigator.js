import React from 'react';
import {View} from 'react-native';
import Splash from '../screens/onboarding/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import JobPostingNavigator from './JobPostingNavigator';
import JobSearchingNavigator from './JobSearchingNavigator';
import SelectUser from '../screens/onboarding/SelectUser';
import DashboardForCompany from '../screens/jobposting/DashboardForCompany';
import AddJob from '../screens/jobposting/Tabs/AddJob';
import EditJob from '../screens/jobposting/Tabs/EditJob';
import UpdateProfileForCompany from '../screens/jobposting/UpdateProfileForCopany';
import ChangeProfilePictureCompany from '../screens/jobposting/ChangeProfilePictureCompany';

const STACK = createStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen
          name="Splash"
          component={Splash}
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
        <STACK.Screen
          name="UpdateProfileForCompany"
          component={UpdateProfileForCompany}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="ChangeProfilePictureForCompany"
          component={ChangeProfilePictureCompany}
          options={{headerShown: false}}
        />

        <STACK.Screen
          name="SelectUser"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="JobPosting"
          component={JobPostingNavigator}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="JobSearching"
          component={JobSearchingNavigator}
          options={{headerShown: false}}
        />
      </STACK.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
