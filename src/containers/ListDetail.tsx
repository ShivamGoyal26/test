import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  createSharedElementStackNavigator,
    SharedElement,
} from 'react-navigation-shared-element';

import Divider from '../components/Divider';
import colorsData from '../Constants/colorsData';
import {getScreenHeight} from '../utils/domUtils';

const ListDetail = ({route, navigation}) => {
  const data = route.params.item;

  const renderItem = useCallback(({item}) => {
    return <View style={[styles.colorItem, {backgroundColor: item}]} />;
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
      <ScrollView bounces={true} style={styles.screen}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.subtitle}>{data.subtitle}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SharedElement id={data.id}>
              <Image
                style={styles.icon}
                source={require('../assets/images/close.png')}
              />
            </SharedElement>
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={{uri: data.image}} />

        <View style={styles.flatlistcontanier}>
          <FlatList
            contentContainerStyle={{padding: getScreenHeight(2)}}
            data={colorsData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            horizontal
          />
        </View>
        <View style={styles.divider}>
          <Divider />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Get a free service</Text>
          <Image
            style={styles.icon}
            source={require('../assets/images/rightarrow.png')}
          />
        </View>

        <View style={styles.divider}>
          <Divider />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>Save 10% and buy now!</Text>
          <Image
            style={styles.icon}
            source={require('../assets/images/rightarrow.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    // padding: getScreenHeight(2),
  },
  flatlist: {
    padding: getScreenHeight(2),
  },
  item: {
    marginBottom: getScreenHeight(2),
  },
  title: {
    fontWeight: 'bold',
    fontSize: getScreenHeight(3),
    color: '#000000',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: getScreenHeight(2),
    color: 'grey',
  },
  image: {
    height: getScreenHeight(40),
    width: '100%',
    resizeMode: 'contain',
  },
  colorItem: {
    width: getScreenHeight(7),
    height: getScreenHeight(7),
    borderRadius: getScreenHeight(1),
    marginRight: getScreenHeight(2),
  },
  flatlistcontanier: {
    height: getScreenHeight(10),
  },
  header: {
    padding: getScreenHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    marginVertical: getScreenHeight(3),
  },
  icon: {
    height: getScreenHeight(2.5),
    width: getScreenHeight(2.5),
    resizeMode: 'contain',
  },
  text: {
    fontSize: getScreenHeight(2),
    fontWeight: 'bold',
    color: '#000000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: getScreenHeight(2),
  },
});

ListDetail.sharedElements = (route, other, showing) => {
    const {item} = route.params
    return [
        {
            id: item.id
        }
    ]
}

export default ListDetail;
