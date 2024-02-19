import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import ShimmerPlaceholder, {
  createShimmerPlaceholder,
} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const shimmer = createShimmerPlaceholder(LinearGradient);

function MyJobs() {
  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigaton = useNavigation();

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    setLoading(true);
    let id = await AsyncStorage.getItem('USER_ID');
    firestore()
      .collection('jobs')
      .where('postBy', '==', id)
      .get()
      .then(async data => {
        setLoading(false);
        let temp = [];
        data.docs.forEach(item => {
          temp.push({...item.data(), id: item.id});
        });
        await AsyncStorage.setItem('JOB_POSTS', temp.length + '');
        setJobs(temp);
      });
  };

  const deleteJob = id => {
    firestore()
      .collection('jobs')
      .doc(id)
      .delete()
      .then(() => {
        getData();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FIND MY JOB</Text>
      {loading && (
        <FlatList
          data={[1, 2, 3]}
          renderItem={({item, index}) => {
            return (
              <View style={styles.loadingView}>
                <ShimmerPlaceholder style={styles.shimmerTitle} />
                <ShimmerPlaceholder style={styles.shimmer} />
                <ShimmerPlaceholder style={styles.shimmer} />
                <ShimmerPlaceholder style={styles.shimmer} />
                <ShimmerPlaceholder style={styles.shimmer} />
                <View style={styles.shimmerBtnView}>
                  <ShimmerPlaceholder style={styles.shimmerBtn} />
                  <ShimmerPlaceholder style={styles.shimmerBtn} />
                </View>
              </View>
            );
          }}
        />
      )}

      {jobs.length <= 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: BLACK_COLOR,
              fontSize: moderateScale(20),
              fontWeight: '600',
            }}>
            No Jobs Available
          </Text>
        </View>
      ) : (
        <FlatList
          data={jobs}
          renderItem={({item, index}) => {
            return (
              <View style={styles.jobItem}>
                <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                <Text style={styles.jobDesc}>{item.jobDescription}</Text>
                <Text style={styles.subTitle}>Skills: {item.skills}</Text>
                <Text style={styles.subTitle}>Company: {item.company}</Text>
                <Text style={styles.subTitle}>
                  Experience: {item.experience}
                </Text>
                <Text style={styles.subTitle}>
                  Package: {item.jobPackage} L/year
                </Text>
                <View style={styles.bottomView}>
                  <TouchableOpacity
                    style={styles.editBtn}
                    onPress={() => {
                      navigaton.navigate('EditJob', {data: item});
                    }}>
                    <Text style={{color: BLACK_COLOR}}>Edit Job</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => {
                      deleteJob(item.id);
                    }}>
                    <Text style={{color: 'red'}}>Delete Job</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  title: {
    fontSize: moderateScale(24),
    color: BLACK_COLOR,
    fontWeight: '600',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(20),
  },
  jobItem: {
    width: '90%',
    borderRadius: moderateScale(20),
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    marginVertical: moderateScale(10),
    padding: moderateScale(20),
  },
  jobTitle: {
    color: BLACK_COLOR,
    fontSize: moderateScale(20),
    fontWeight: '600',
  },
  jobDesc: {
    color: BLACK_COLOR,
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
  },
  subTitle: {
    color: BLACK_COLOR,
    fontSize: moderateScale(12),
    marginTop: moderateScale(5),
  },
  bottomView: {
    marginTop: moderateScale(15),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  editBtn: {
    width: '40%',
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtn: {
    width: '40%',
    height: moderateScale(40),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  shimmerTitle: {
    width: '85%',
    height: moderateVerticalScale(20),
    borderRadius: moderateScale(20),
    marginTop: moderateScale(10),
  },
  shimmer: {
    width: '75%',
    height: moderateVerticalScale(20),
    borderRadius: moderateScale(20),
    marginTop: moderateScale(10),
  },
  shimmerBtnView: {
    width: '100%',
    marginTop: moderateScale(20),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shimmerBtn: {
    width: '40%',
    height: moderateVerticalScale(45),
    borderRadius: moderateScale(20),
  },
});

export default MyJobs;
