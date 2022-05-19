import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getScreenHeight} from '../utils/domUtils';

const Divider = () => {
  return <View style={styles.screen} />;
};

const styles = StyleSheet.create({
  screen: {
    width: '90%',
    height: getScreenHeight(0.1),
backgroundColor: 'grey',
    alignSelf: 'center',
  },
});

export default Divider;
