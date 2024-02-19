import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {BLACK_COLOR, WHITE_COLOR} from '../utils/Colors';

function CustomHeader({title, onClick}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={{
          padding: 5,
          paddingLeft: 0,
        }}
        onPress={() => {
          onClick();
        }}>
        <Image style={styles.close} source={require('../images/back.png')} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(45),
    backgroundColor: WHITE_COLOR,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(20),
  },
  close: {
    width: scale(18),
    height: scale(18),
  },
  title: {
    fontWeight: '500',
    color: BLACK_COLOR,
    marginLeft: moderateScale(10),
    fontSize: moderateScale(20),
  },
});

export default CustomHeader;
