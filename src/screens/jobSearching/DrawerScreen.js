import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../utils/Colors';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Home from './tabs/Home';
import Applies from './tabs/Applies';
import Chat from './tabs/Chat';
import UserProfile from './tabs/UserProfile';

function DrawerScreen() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Applies />
      ) : selectedTab === 2 ? (
        <Chat />
      ) : (
        <UserProfile />
      )}

      <View style={styles.bottomNavView}>
        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 0 ? 3 : 0, borderColor: 'blue'},
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../../images/home.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 0 ? 'blue' : 'gray'},
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 1 ? 3 : 0, borderColor: 'blue'},
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../../images/send.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 1 ? 'blue' : 'gray'},
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 2 ? 3 : 0, borderColor: 'blue'},
          ]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../../images/messenger.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 2 ? 'blue' : 'gray'},
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 3 ? 3 : 0, borderColor: 'blue'},
          ]}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../../images/user.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 3 ? 'blue' : 'gray'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  bottomNavView: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: WHITE_COLOR,

    borderTopWidth: 0.5,
    borderColor: '#9e9e9e',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    position: 'absolute',
    bottom: 0,
  },
  tabs: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: scale(25),
    height: scale(25),
  },
});
export default DrawerScreen;
