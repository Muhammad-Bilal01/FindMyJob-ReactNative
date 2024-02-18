import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {BLACK_COLOR, WHITE_COLOR} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  const getData = async () => {
    let type = await AsyncStorage.getItem('USER_TYPE');
    if (type !== null) {
      if (type === 'company') {
        navigation.navigate('DashboardForCompany');
      }
    } else {
      navigation.navigate('SelectUser');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo} />
      <Text style={styles.name}>FindMyJob</Text>
      <Text style={styles.slogan}>Post & Find Jobs in One Place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE_COLOR,
  },
  logo: {
    width: scale(200),
    height: verticalScale(100),
  },
  name: {
    color: BLACK_COLOR,
    fontSize: moderateScale(35),
    fontWeight: '600',
    marginTop: moderateVerticalScale(10),
  },
  slogan: {
    color: BLACK_COLOR,
    position: 'absolute',
    bottom: moderateVerticalScale(50),
    fontSize: moderateScale(14),
    fontStyle: 'italic',
    fontWeight: '600',
  },
});

export default Splash;
