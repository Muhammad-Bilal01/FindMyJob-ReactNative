import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BLACK_COLOR, GRAY_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSolidBtn from '../../../components/CustomSolidBtn';

function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.search_container}>
        <Image
          source={require('../../../images/search.png')}
          style={styles.search_icon}
        />
        <Text style={styles.placeholder}>Search Jobs here...</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>
        You are one step away from getting a good Job.
      </Text>
      <View style={styles.notes}>
        <Image
          source={require('../../../images/star.png')}
          style={styles.note_icon}
        />
        <Text style={styles.note}>Get Job after creating account.</Text>
      </View>
      <View style={styles.notes}>
        <Image
          source={require('../../../images/star.png')}
          style={styles.note_icon}
        />
        <Text style={styles.note}>Contact Directly with recuriter.</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.solid_btn}>
          <Text style={{color: WHITE_COLOR}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.border_btn}>
          <Text style={{color: BLACK_COLOR}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.jobSearchCard}>
        <Image
          source={require('../../../images/search_anim.gif')}
          style={styles.gif}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={GRAY_COLOR}
          placeholder="Enter Job Title"
        />
        <TextInput
          style={[styles.input, {marginTop: moderateScale(10)}]}
          placeholderTextColor={GRAY_COLOR}
          placeholder="Enter Job Title"
        />
        <CustomSolidBtn title={'Search Job'} onClick={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  search_container: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(40),
    borderWidth: 2,
    borderColor: GRAY_COLOR,
    padding: moderateScale(10),
  },
  search_icon: {
    width: scale(20),
    height: scale(20),
    tintColor: 'gray',
  },
  placeholder: {
    color: 'gray',
    marginLeft: moderateScale(10),
  },
  heading: {
    fontSize: moderateScale(24),
    color: BLACK_COLOR,
    fontWeight: '700',
    marginTop: moderateScale(20),
    alignSelf: 'center',
    width: '90%',
  },
  notes: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  note: {
    marginLeft: moderateScale(10),
    color: BLACK_COLOR,
  },
  note_icon: {
    width: scale(15),
    height: scale(15),
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
  jobSearchCard: {
    marginTop: moderateScale(50),
    width: '90%',
    paddingBottom: moderateVerticalScale(20),
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    borderRadius: moderateScale(10),
  },
  gif: {
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    height: moderateVerticalScale(35),
    borderWidth: 1,
    borderRadius: moderateScale(15),
    paddingLeft: moderateScale(10),
    alignSelf: 'center',
    borderColor: GRAY_COLOR,
  },
});

export default Home;
