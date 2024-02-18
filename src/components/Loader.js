import {ActivityIndicator, Modal, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';
import {WHITE_COLOR} from '../utils/Colors';

function Loader({visible}) {
  return (
    <Modal transparent visible={visible} style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        <View
          style={{
            width: scale(80),
            height: scale(80),
            borderRadius: moderateScale(10),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: WHITE_COLOR,
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      </View>
    </Modal>
  );
}

export default Loader;
