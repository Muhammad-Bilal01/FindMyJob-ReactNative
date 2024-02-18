import React, {useState} from 'react';
import {StyleSheet, Text, Image, View, Alert} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomTextInputFeild from '../../components/CustomTextInputFeild';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import CustomBorderBtn from '../../components/CustomBorderBtn';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginForCompany() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const validate = () => {
    // Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let validEmail = true;
    let validPassword = true;

    // Email Validation
    if (email === '') {
      validEmail = false;
      setBadEmail('Please Enter Your Email');
    } else if (!email.match(emailRegex)) {
      validEmail = false;
      setBadEmail('Please Enter Valid Email');
    } else {
      validEmail = true;
      setBadEmail('');
    }

    // Password Validation
    if (password === '') {
      validPassword = false;
      setBadPassword('Please enter your password');
    } else if (password.length < 6) {
      validPassword = false;
      setBadPassword('Password must be 6 characters long');
    } else {
      validPassword = true;
      setBadPassword('');
    }

    return validEmail && validPassword;
  };

  const login = () => {
    setLoading(true);
    firestore()
      .collection('companies')
      .where('email', '==', email)
      .get()
      .then(data => {
        setLoading(false);
        console.log(data.docs);
        if (data.docs.length > 0) {
          data.docs.forEach(item => {
            if (item.data().password === password) {
              setBadEmail('');
              setBadPassword('');
              gotoNextScreen(item.id, item.data().email, item.data().name);
            } else {
              setBadPassword('Invalid Password');
            }
          });
        } else {
          setBadEmail('No User Exist');
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const gotoNextScreen = async (id, email, name) => {
    console.log(id, name, email);
    await AsyncStorage.setItem('USER_ID', id);
    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USER_TYPE', 'company');
    navigation.navigate('DashboardForCompany');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      <CustomTextInputFeild
        title={'Email'}
        placeholder={'yourname@gmail.com'}
        value={email}
        onChangeText={text => setEmail(text)}
        bad={badEmail !== '' ? true : false}
      />
      {badEmail !== '' && <Text style={styles.errMsg}>{badEmail}</Text>}
      <CustomTextInputFeild
        title={'Password'}
        placeholder={'******'}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        bad={badPassword !== '' ? true : false}
      />
      {badPassword !== '' && <Text style={styles.errMsg}>{badPassword}</Text>}

      <Text style={styles.forgot}>Forgot Password?</Text>
      <CustomSolidBtn
        title={'Login'}
        onPress={() => {
          if (validate()) {
            login();
          }
        }}
      />
      <CustomBorderBtn
        title={'Create Account'}
        onPress={() => {
          navigation.navigate('SignupForCompany');
        }}
      />
      <Loader visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  logo: {
    marginTop: moderateVerticalScale(20),
    width: scale(150),
    height: scale(100),
    alignSelf: 'center',
  },
  title: {
    marginTop: moderateVerticalScale(10),
    fontSize: moderateScale(25),
    color: BLACK_COLOR,
    alignSelf: 'center',
    fontWeight: '600',
  },
  forgot: {
    color: BLACK_COLOR,
    alignSelf: 'flex-end',
    marginRight: moderateScale(20),
    marginTop: moderateVerticalScale(10),
    fontSize: moderateScale(15),
    marginBottom: moderateVerticalScale(10),
  },
  errMsg: {
    color: 'red',
    marginLeft: moderateScale(22),
    fontSize: moderateScale(11),
  },
});

export default LoginForCompany;
