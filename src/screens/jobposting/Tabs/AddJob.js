import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomTextInputFeild from '../../../components/CustomTextInputFeild';
import CustomDropDown from '../../../components/CustomDropDown';
import CustomSolidBtn from '../../../components/CustomSolidBtn';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {profiles} from '../../../utils/Profiles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import Loader from '../../../components/Loader';

function AddJob() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [company, setCompany] = useState('');
  const [jobPackage, setJobPackage] = useState('');

  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const [selectedSkills, setSelectedSkills] = useState('Select Skills');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const postJob = async () => {
    setLoading(true);
    let id = await AsyncStorage.getItem('USER_ID');
    let name = await AsyncStorage.getItem('NAME');
    firestore()
      .collection('jobs')
      .add({
        postBy: id,
        posterName: name,
        jobTitle,
        jobDescription,
        experience,
        company,
        jobPackage,
        category: profiles[selectedCategory].category,
        skills: selectedSkills,
      })
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            padding: 5,
            paddingLeft: 0,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.close}
            source={require('../../../images/close.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Add Job</Text>
      </View>
      <View>
        <CustomTextInputFeild
          title={'Job Title'}
          placeholder={'ex: Web Developer '}
          value={jobTitle}
          onChangeText={text => setJobTitle(text)}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomTextInputFeild
          title={'Job Description'}
          placeholder={'ex: Need a Web Developer '}
          value={jobDescription}
          onChangeText={text => setJobDescription(text)}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomDropDown
          title={'Select Category'}
          placeholder={
            selectedCategory === 'Select Category'
              ? 'Select Category'
              : profiles[selectedCategory].category
          }
          onPress={() => {
            setOpenCategoryModal(true);
          }}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomDropDown
          title={'Select Skills'}
          placeholder={selectedSkills}
          onPress={() => {
            setOpenSkillsModal(true);
          }}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomTextInputFeild
          title={'Past Experience'}
          placeholder={'ex: 2 years '}
          value={experience}
          keyboardType={'numeric'}
          onChangeText={text => setExperience(text)}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomTextInputFeild
          title={'Company'}
          placeholder={'ex: Google'}
          value={company}
          onChangeText={text => setCompany(text)}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomTextInputFeild
          title={'Package'}
          placeholder={'ex: 2L'}
          value={jobPackage}
          keyboardType={'numeric'}
          onChangeText={text => setJobPackage(text)}
          //   bad={badEmail !== '' ? true : false}
        />
        <CustomSolidBtn
          title={'Post Job'}
          onPress={() => {
            postJob();
          }}
        />
        <Modal visible={openCategoryModal} transparent style={{flex: 1}}>
          <View style={styles.modalMainView}>
            <View style={styles.listingView}>
              <Text
                style={[
                  styles.title,
                  {marginTop: moderateScale(10), marginLeft: moderateScale(20)},
                ]}>
                Select Category
              </Text>
              <FlatList
                data={profiles}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.profileItem}
                      onPress={() => {
                        setSelectedCategory(index);
                        setOpenCategoryModal(false);
                      }}>
                      <Text style={styles.itemText}>{item.category}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>

        <Modal visible={openSkillsModal} transparent style={{flex: 1}}>
          <View style={styles.modalMainView}>
            <View style={styles.listingView}>
              <Text
                style={[
                  styles.title,
                  {marginTop: moderateScale(10), marginLeft: moderateScale(20)},
                ]}>
                Select Skills
              </Text>
              <FlatList
                data={
                  selectedCategory === 'Select Category'
                    ? profiles[0].keywords
                    : profiles[selectedCategory].keywords
                }
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={styles.profileItem}
                      onPress={() => {
                        setSelectedSkills(item[0]);
                        setOpenSkillsModal(false);
                      }}>
                      <Text style={styles.itemText}>{item}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
      <Loader visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
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
    width: scale(15),
    height: scale(15),
  },
  title: {
    fontWeight: '500',
    color: BLACK_COLOR,
    marginLeft: moderateScale(10),
    fontSize: moderateScale(20),
  },
  modalMainView: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listingView: {
    backgroundColor: WHITE_COLOR,
    width: '90%',
    height: '80%',
    borderRadius: moderateScale(20),
  },
  profileItem: {
    width: '90%',
    height: moderateScale(40),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: moderateScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#9e9e9e',
  },
  itemText: {
    color: BLACK_COLOR,
  },
});

export default AddJob;
