import React from 'react';
import {StyleSheet, View} from 'react-native';
import NoLoginCard from '../../../components/NoLoginCard';
import {WHITE_COLOR} from '../../../utils/Colors';

function Applies() {
  return (
    <View style={styles.container}>
      <NoLoginCard
        heading={'One Place to Track all your Applications'}
        desc={
          'track all your jobs which you are applied but for that you need to create account first'
        }
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

export default Applies;
