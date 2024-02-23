import React from 'react';
import {StyleSheet, View} from 'react-native';
import NoLoginCard from '../../../components/NoLoginCard';
import {WHITE_COLOR} from '../../../utils/Colors';

function Chat() {
  return (
    <View style={styles.container}>
      <NoLoginCard
        heading={'Chat with Recruter'}
        desc={
          'Manage your Chats with Recruters to get recommendations from MNCs'
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

export default Chat;
