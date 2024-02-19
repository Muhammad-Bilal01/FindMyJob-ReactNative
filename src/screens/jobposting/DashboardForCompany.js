import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import MyJobs from './Tabs/MyJobs';
import SearchCandidate from './Tabs/SearchCandidate';
import Chat from './Tabs/Chat';
import Profile1 from './Tabs/Profile1';
import {useNavigation} from '@react-navigation/native';

function DashboardForCompany() {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {selectedTab === 0 ? (
        <MyJobs />
      ) : selectedTab === 1 ? (
        <SearchCandidate />
      ) : selectedTab === 2 ? (
        <Chat />
      ) : (
        <Profile1
          onJobsClick={() => {
            setSelectedTab(0);
          }}
        />
      )}

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 0 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../../images/home.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 0 ? 'red' : 'gray'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 1 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../../images/search-user.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 1 ? 'red' : 'gray'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => {
            navigation.navigate('AddJob');
          }}>
          <Image
            source={require('../../images/addition.png')}
            style={styles.tabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 2 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../../images/messenger.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 2 ? 'red' : 'gray'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabs,
            {borderTopWidth: selectedTab === 3 ? 3 : 0, borderColor: 'red'},
          ]}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../../images/user.png')}
            style={[
              styles.tabIcon,
              {tintColor: selectedTab === 3 ? 'red' : 'gray'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  bottomView: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: WHITE_COLOR,

    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 15,

    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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

export default DashboardForCompany;
