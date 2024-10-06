import React, { useState } from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';

const App = () => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      id: '1',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/giacchuyen1.png'),
    },
    {
      id: '2',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/daynguon1.png'),
    },
    {
      id: '3',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/dauchuyendoipsps21.png'),
    },
    {
      id: '4',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/dauchuyendoi1.png'),
    },
    {
      id: '5',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/carbusbtops21.png'),
    },
    {
      id: '1',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/giacchuyen1.png'),
    },
    {
      id: '2',
      name: 'Cáp chuyển từ Cổng USB sang PS2...',
      starRV: require('./assets/Star2.png'),
      notstarRV: require('./assets/Star5.png'),
      quantityReview: '(15)',
      price: '69.900 đ',
      discount: '-39%',
      image: require('./assets/daynguon1.png'),
    },
  ];

  const render = ({ item }) => {
    const isSelected = selected === item.id;
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { backgroundColor: isSelected ? 'white' : '#e5e5e5' },
        ]}
        onPress={() => {
          setSelected(item.id);
        }}>
        <View style={{ flex: 1 }}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={item.starRV} />
            <Image source={item.starRV} />
            <Image source={item.starRV} />
            <Image source={item.starRV} />
            <Image source={item.notstarRV} />
            <Text>{item.quantityReview}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>{item.price}</Text>
            <Text>{item.discount}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.nav}>
        <Image source={require('./assets/Vector.png')} />
        <View>
          <Image
            style={styles.kinhLup}
            source={require('./assets/kinhlup.png')}
          />
          <TextInput
            style={styles.search}
            placeholder="Dây cáp usb"
            placeholderTextColor="#7D5B5B"
          />
        </View>
        <Image source={require('./assets/bi_cart-check.png')} />

        <Image source={require('./assets/bacham.png')} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={render}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      <View style={styles.nav}>
        <Image source={require('./assets/menu.png')} />
        <Image source={require('./assets/home.png')} />
        <Image source={require('./assets/back.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    width: 192,
    height: 30,
    borderWidth: 0.5,
    paddingLeft: '20%',
    borderColor: 'white',
    padding: '8%',
    backgroundColor: 'white',
  },
  kinhLup: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: '12%',
    left: '5%',
  },
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  image: {
    width: 155,
    height: 90,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    backgroundColor: '#e5e5e5',
  },

  nav: {
    backgroundColor: '#1BA9FF',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0% 5%',
  },
});

export default App;
