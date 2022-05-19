import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  createSharedElementStackNavigator,
  SharedElement,
} from 'react-navigation-shared-element';

import {getScreenHeight, getScreenWidth} from '../utils/domUtils';

const CarItem = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.contanier}>
          <Text style={styles.title}>{props.item.name}</Text>
          <Text style={styles.subtitle}>{props.item.subtitle}</Text>
      </View>
      <SharedElement id={props.item.id}>
        <Image style={styles.image} source={{uri: props.item.image}} />
      </SharedElement>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#1466CC29',
    height: getScreenHeight(15),
    borderRadius: getScreenHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: getScreenHeight(15),
    width: getScreenWidth(40),
    resizeMode: 'contain',
  },
  contanier: {
    height: getScreenHeight(15),
    width: '50%',
    padding: getScreenHeight(2),
  },
  title: {
    fontSize: getScreenHeight(2.5),
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: getScreenHeight(1.8),
    marginTop: getScreenHeight(1),
    color: 'grey',
  },
});

export default CarItem;
