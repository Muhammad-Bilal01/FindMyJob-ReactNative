import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../utils/Colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

function CustomBorderBtn({title, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: moderateVerticalScale(45),
    backgroundColor: WHITE_COLOR,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(20),
  },
  title: {
    color: BLACK_COLOR,
  },
});

export default CustomBorderBtn;
