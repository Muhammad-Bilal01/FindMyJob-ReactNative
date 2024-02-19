import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {WHITE_COLOR} from '../../utils/Colors';
import {moderateScale, scale} from 'react-native-size-matters';
import CustomHeader from '../../components/CustomHeader';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomBorderBtn from '../../components/CustomBorderBtn';
import CustomSolidBtn from '../../components/CustomSolidBtn';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeProfilePictureCompany = () => {
  const [imageData, setImageData] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const openGallery = async () => {
    const res = await launchImageLibrary({mediaType: 'photo'});
    if (!res.didCancel) {
      setImageData(res);
    }
  };

  const openCamera = async () => {
    const res = await launchCamera({mediaType: 'photo'});
    if (!res.didCancel) {
      setImageData(res);
    }
  };

  const uploadPic = async () => {
    setLoading(true);
    const reference = storage().ref(imageData.assets[0].fileName);
    const pathToFile = imageData.assets[0].uri;
    // uploads file
    await reference.putFile(pathToFile);
    const url = await storage()
      .ref(imageData.assets[0].fileName)
      .getDownloadURL();

    //   update to database
    const id = await AsyncStorage.getItem('USER_ID');

    firestore()
      .collection('companies')
      .doc(id)
      .update({
        profile: url,
      })
      .then(async () => {
        setLoading(false);
        await AsyncStorage.setItem('PROFILE_PIC', url);
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
        title={'Profile Picture'}
        onClick={() => {
          navigation.goBack();
        }}
      />
      {imageData == null ? (
        <Image
          source={require('../../images/profile.png')}
          style={styles.img}
        />
      ) : (
        <Image source={{uri: imageData.assets[0].uri}} style={styles.img} />
      )}
      <CustomBorderBtn
        title={'Choose Form Gallery'}
        onPress={() => {
          openGallery();
        }}
      />
      <CustomBorderBtn
        title={'Capture Photo'}
        onPress={() => {
          openCamera();
        }}
      />
      {imageData !== null && (
        <CustomSolidBtn
          title={'Upload Profile Pic'}
          onPress={() => {
            uploadPic();
          }}
        />
      )}
      <Loader visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  img: {
    marginTop: moderateScale(20),
    width: scale(150),
    height: scale(150),
    alignSelf: 'center',
    borderRadius: moderateScale(150),
  },
});

export default ChangeProfilePictureCompany;
