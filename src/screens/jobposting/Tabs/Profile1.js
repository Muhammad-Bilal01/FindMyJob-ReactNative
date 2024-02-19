import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileOptionItem from '../../../components/ProfileOptionItem';

function Profile1({onJobsClick}) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [profile, setProfile] = useState('');
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const getData = async () => {
    try {
      let name = await AsyncStorage.getItem('NAME');
      let job = await AsyncStorage.getItem('JOB_POSTS');
      let profilePic = await AsyncStorage.getItem('PROFILE_PIC');
      setName(name);
      setJob(job);
      setProfile(profilePic);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <TouchableOpacity>
        {profile !== '' ? (
          <Image source={{uri: profile}} style={styles.profileImg} />
        ) : (
          <Image
            source={require('../../../images/profile.png')}
            style={styles.profileImg}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text
        style={styles.changeProfile}
        onPress={() => {
          navigation.navigate('UpdateProfileForCompany');
        }}>
        Update Profile
      </Text>
      <Text
        style={styles.changeProfile}
        onPress={() => {
          navigation.navigate('ChangeProfilePictureForCompany');
        }}>
        Change Profile Picture
      </Text>
      <View style={styles.optionArea}>
        <ProfileOptionItem
          icon={require('../../../images/job.png')}
          title={`Job Posts (${job})`}
          onClick={() => {
            onJobsClick();
          }}
        />
        <ProfileOptionItem
          icon={require('../../../images/contact.png')}
          title={'Contact Us'}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require('../../../images/theme.png')}
          title={'Change Theme'}
          onClick={() => {}}
        />
        <ProfileOptionItem
          icon={require('../../../images/logout.png')}
          title={'Logout'}
          onClick={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  title: {
    fontSize: moderateScale(24),
    color: BLACK_COLOR,
    fontWeight: '600',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(20),
  },
  profileImg: {
    width: moderateScale(120),
    height: moderateScale(120),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    borderRadius: scale(150),
  },
  changeProfile: {
    color: BLACK_COLOR,
    marginTop: moderateScale(10),
    textAlign: 'center',
    fontSize: moderateScale(16),
    textDecorationLine: 'underline',
  },
  name: {
    color: BLACK_COLOR,
    marginTop: moderateScale(20),
    fontSize: moderateScale(25),
    fontWeight: '600',
    textAlign: 'center',
  },
  optionArea: {
    marginTop: moderateVerticalScale(50),
  },
});
export default Profile1;
