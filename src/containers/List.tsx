import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  Pressable,
  StatusBar,
} from 'react-native';
import {
  createSharedElementStackNavigator,
  SharedElement,
} from 'react-navigation-shared-element';

import CarItem from '../components/CarItem';
import carsData from '../Constants/carsData';
import {getScreenHeight} from '../utils/domUtils';

const List = ({navigation}) => {
  const renderItem = useCallback(({item}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('ListDetail', {
            item: item,
          });
        }}
        style={styles.item}>

          <CarItem item={item} />
      </Pressable>
    );
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
      <View style={styles.screen}>
        <FlatList
          data={carsData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlist: {
    padding: getScreenHeight(2),
  },
  item: {
    marginBottom: getScreenHeight(2),
  },
});



export default List;
