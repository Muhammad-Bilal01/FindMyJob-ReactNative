import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';

function CustomDropDown({title, placeholder, bad, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.input, {borderColor: bad ? 'red' : '#121212'}]}>
      <Text style={[styles.title, {color: bad ? 'red' : BLACK_COLOR}]}>
        {title}
      </Text>
      <Text
        style={{
          color: placeholder.includes('Select') ? '#9E9E9E' : BLACK_COLOR,
        }}>
        {placeholder}
      </Text>
      <Image
        source={require('../images/down-arrow.png')}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: moderateScale(20),
    width: '90%',
    height: verticalScale(40),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 0.4,
    borderColor: BLACK_COLOR,
    paddingHorizontal: moderateScale(15),
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    color: BLACK_COLOR,
    backgroundColor: WHITE_COLOR,
    fontSize: moderateScale(12),
    position: 'absolute',
    top: -moderateVerticalScale(8),
    marginLeft: moderateScale(10),
    paddingLeft: moderateScale(8),
    paddingRight: moderateScale(8),
  },
  arrow: {
    width: moderateScale(12),
    height: moderateScale(12),
  },
});

export default CustomDropDown;
