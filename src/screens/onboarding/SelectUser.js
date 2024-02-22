import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

function SelectUser() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>What are you looking for?</Text>
      <TouchableOpacity
        style={styles.wantToHire}
        onPress={() => {
          navigation.navigate('JobPosting');
        }}>
        <Text style={styles.btnText}>Want to Hire Candidate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wantToJob}
        onPress={() => {
          navigation.navigate('JobSearching');
        }}>
        <Text style={styles.btnText2}>Want to Get Jobs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE_COLOR,
  },
  logo: {
    width: scale(150),
    height: scale(100),
    marginBottom: moderateScale(30),
  },
  title: {
    color: BLACK_COLOR,
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  wantToHire: {
    width: '90%',
    backgroundColor: BLACK_COLOR,
    height: moderateVerticalScale(50),
    borderRadius: 10,
    marginTop: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {color: WHITE_COLOR},
  wantToJob: {
    width: '90%',
    backgroundColor: WHITE_COLOR,
    height: moderateVerticalScale(50),
    borderRadius: 10,
    marginTop: moderateScale(15),
    borderWidth: 1,
    borderColor: BLACK_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText2: {
    color: BLACK_COLOR,
  },
});

export default SelectUser;
