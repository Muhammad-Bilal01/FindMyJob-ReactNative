import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';

function CustomTextInputFeild({
  title,
  placeholder,
  value,
  onChangeText,
  bad,
  keyboardType,
}) {
  return (
    <View style={[styles.input, {borderColor: bad ? 'red' : '#121212'}]}>
      <Text style={[styles.title, {color: bad ? 'red' : BLACK_COLOR}]}>
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={text => onChangeText(text)}
        placeholder={placeholder}
        style={{color: BLACK_COLOR}}
        placeholderTextColor={'#9e9e9e'}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
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
});

export default CustomTextInputFeild;
