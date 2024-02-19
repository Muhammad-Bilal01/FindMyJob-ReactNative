import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/Loader';

import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../../components/CustomHeader';

function UpdateProfileForCompany() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [badName, setBadName] = useState('');

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState('');

  const [contact, setContact] = useState('');
  const [badContact, setBadContact] = useState('');

  const [company, setCompany] = useState('');
  const [badCompany, setBadCompany] = useState('');

  const [address, setAddress] = useState('');
  const [badAddress, setBadAddress] = useState('');

  const [loading, setLoading] = useState(false);

  const [accountCreated, setAccountCreated] = useState(false);

  // to validate the text field
  const validate = () => {
    // Regex
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z'-]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactRegex = /^\+?\d+$/;

    let validName = true;
    let validEmail = true;
    let validContact = true;
    let validCompany = true;
    let validAddress = true;

    if (name === '') {
      validName = false;
      setBadName('Please Enter Your Name');
    } else if (name.length < 3) {
      validName = false;
      setBadName('Name must be more than 3 characters');
    } else if (!name.toString().match(nameRegex)) {
      validName = false;
      setBadName("Name doesn't contain alphanumeric characters & symbols");
    } else {
      validName = true;
      setBadName('');
    }

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

    // Contact Validation
    if (contact === '') {
      validContact = false;
      setBadContact('Please Enter Your Contact');
    } else if (contact.length < 11) {
      validContact = false;
      setBadContact('Contact must be greater than 11 characters');
    } else if (!contact.match(contactRegex)) {
      validContact = false;
      setBadContact('Please Enter Valid Contact');
    } else {
      validContact = true;
      setBadContact('');
    }

    // Company and Address Validation
    if (company === '') {
      validCompany = false;
      setBadCompany('Plaese Enter Company Name');
    } else {
      validCompany = true;
      setBadCompany('');
    }

    if (address === '') {
      validAddress = false;
      setBadAddress('Plaese Enter Address');
    } else {
      validAddress = true;
      setBadAddress('');
    }

    return (
      validName && validEmail && validContact && validCompany && validAddress
    );
  };

  // Get Data
  const getData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');
    firestore()
      .collection('companies')
      .where('email', '==', mEmail)
      .get()
      .then(res => {
        res.docs.forEach(item => {
          setName(item.data().name);
          setEmail(item.data().email);
          setContact(item.data().contact);
          setCompany(item.data().company);
          setAddress(item.data().address);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Register User
  const UpdateUser = async () => {
    setLoading(true);
    const id = await AsyncStorage.getItem('USER_ID');
    firestore()
      .collection('companies')
      .doc(id)
      .update({
        name,
        email,
        contact,
        company,
        address,
      })
      .then(async () => {
        await AsyncStorage.setItem('NAME', name);
        await AsyncStorage.setItem('EMAIL', email);
        setLoading(false);
        navigation.goBack();
      })
      .catch(err => {
        setLoading(false);
        console.log(err.toString);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title={'Update Profile'}
        onClick={() => {
          navigation.goBack();
        }}
      />
      <CustomTextInputFeild
        title={'Name'}
        placeholder={'Your Name'}
        value={name}
        bad={badName !== '' ? true : false}
        onChangeText={text => setName(text)}
      />
      {badName !== '' && <Text style={styles.errMsg}>{badName}</Text>}
      <CustomTextInputFeild
        title={'Email'}
        placeholder={'yourname@gmail.com'}
        value={email}
        onChangeText={text => setEmail(text)}
        bad={badEmail !== '' ? true : false}
      />
      {badEmail !== '' && <Text style={styles.errMsg}>{badEmail}</Text>}

      <CustomTextInputFeild
        title={'Conatact'}
        placeholder={'92320********'}
        value={contact}
        onChangeText={text => {
          setContact(text);
        }}
        bad={badContact !== '' ? true : false}
      />
      {badContact !== '' && <Text style={styles.errMsg}>{badContact}</Text>}
      <CustomTextInputFeild
        title={'Company Name'}
        placeholder={'ex. Google'}
        value={company}
        onChangeText={text => {
          setCompany(text);
        }}
        bad={badCompany !== '' ? true : false}
      />
      {badCompany !== '' && <Text style={styles.errMsg}>{badCompany}</Text>}
      <CustomTextInputFeild
        title={'Address'}
        placeholder={'ex. karachi'}
        value={address}
        onChangeText={text => {
          setAddress(text);
        }}
        bad={badAddress !== '' ? true : false}
      />
      {badAddress !== '' && <Text style={styles.errMsg}>{badAddress}</Text>}
      <CustomSolidBtn
        title={'Update Profile'}
        onPress={() => {
          if (validate()) {
            UpdateUser();
          }
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
  doneView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  done: {
    width: scale(150),
    height: scale(150),
  },
});

export default UpdateProfileForCompany;
