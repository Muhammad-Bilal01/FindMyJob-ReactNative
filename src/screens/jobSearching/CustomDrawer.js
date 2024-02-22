import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../utils/Colors';
import {moderateScale, scale} from 'react-native-size-matters';

function CustomDrawer() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.drawer_header}>
        <Image
          source={require('../../images/profile.png')}
          style={styles.user_profile}
        />
        <View style={styles.text_side}>
          <Text style={styles.heading}>Build Your Profile</Text>
          <Text style={styles.sub_heading}>
            Job Opportunity are waiting for you at FindMyJob
          </Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.solid_btn}>
          <Text style={{color: WHITE_COLOR}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.border_btn}>
          <Text style={{color: BLACK_COLOR}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== 'ios' ? moderateScale(25) : 0,
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  user_profile: {
    width: scale(70),
    height: scale(70),
    marginLeft: moderateScale(10),
  },
  drawer_header: {
    flexDirection: 'row',
  },
  text_side: {
    marginLeft: moderateScale(10),
  },
  heading: {
    color: BLACK_COLOR,
    fontSize: scale(18),
    fontWeight: '700',
  },
  sub_heading: {
    marginTop: moderateScale(2),
    color: BLACK_COLOR,
    fontSize: scale(12),
    fontWeight: '500',
    width: '60%',
  },
  btnView: {
    marginTop: moderateScale(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  solid_btn: {
    width: '40%',
    height: scale(30),
    backgroundColor: BLACK_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
  },
  border_btn: {
    width: '40%',
    height: scale(30),
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
  },
});

export default CustomDrawer;
