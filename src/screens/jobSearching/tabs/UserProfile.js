import React from 'react';
import {StyleSheet, View} from 'react-native';
import NoLoginCard from '../../../components/NoLoginCard';
import {WHITE_COLOR} from '../../../utils/Colors';

function UserProfile() {
  return (
    <View style={styles.container}>
      <NoLoginCard
        heading={'Manage your profile/portfolio for getting hire'}
        desc={'manage all your portfolio in one place'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});

export default UserProfile;
