import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLACK_COLOR} from '../utils/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import {moderateVerticalScale} from 'react-native-size-matters';

function ProfileOptionItem({title, icon, onClick}) {
  return (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => {
        onClick();
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={icon} style={{width: scale(20), height: scale(20)}} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        source={require('../images/right.png')}
        style={{width: scale(14), height: scale(14)}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: moderateScale(20),
    marginTop: moderateVerticalScale(15),
    padding: moderateScale(10),
    borderWidth: 1,
    borderColor: BLACK_COLOR,
    borderRadius: scale(20),
  },
  title: {
    color: BLACK_COLOR,
    marginLeft: moderateScale(15),
    fontSize: moderateScale(16),
  },
});

export default ProfileOptionItem;
