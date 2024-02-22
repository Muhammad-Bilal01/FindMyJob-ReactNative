import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import DrawerScreen from './DrawerScreen';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <CustomDrawer />;
      }}>
      <Drawer.Screen
        name={'Drawer'}
        component={DrawerScreen}
        options={{title: 'FindMyJob'}}
      />
    </Drawer.Navigator>
  );
}

export default Main;
