import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import CustomSolidBtn from './CustomSolidBtn';

function NoLoginCard({heading, desc}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading ? heading : ''}</Text>
      <Text style={styles.desc}>{desc ? desc : ''}</Text>
      <CustomSolidBtn title={'Login'} onPress={() => {}} />
      <View style={styles.signUpView}>
        <Text style={{color: BLACK_COLOR}}>Don't have an account? </Text>
        <Text
          style={{
            color: BLACK_COLOR,
            textDecorationLine: 'underline',
            fontWeight: '500',
          }}>
          Create Account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  heading: {
    width: '90%',
    color: BLACK_COLOR,
    fontSize: moderateScale(25),
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: moderateScale(150),
  },
  desc: {
    width: '80%',
    color: BLACK_COLOR,
    opacity: 0.8,
    fontSize: moderateScale(14),
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: moderateScale(10),
  },
  signUpView: {
    marginTop: moderateScale(20),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoLoginCard;
