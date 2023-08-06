import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions } from "react-native";
import React from "react";
import FaceCare from './FaceCare';
import {useState, useEffect} from 'react';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({handleCartBtn}) => {
  const images = [
    require('../assets/Neem.png'),
    require('../assets/bn1.png'),
    require('../assets/bn2.jpg')
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderImage = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} resizeMode="cover" />
    </View>
  );
  return (
    <ScrollView>

      

      <SafeAreaView contentContainerStyle={styles.imageContainer}>
        <FlatList 
        data={[images[currentIndex]]} 
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
      />
      
      </SafeAreaView>
      <View style={{height: 350, backgroundColor: '#E7E7EA', marginTop: 10, padding: 10, marginLeft: 10, marginRight: 10}}>
        <Text style={{fontWeight: 'bold', marginLeft: 50}}>Address</Text>
       
        <Text style={{marginTop: 10, marginLeft: 20}}> <Ionicons name="location" size={24} color="black" /> BELCHOWK-4, NARAYANGARH,</Text>
        <Text style={{marginTop: 5, marginLeft: 50}}>CHITWAN, NEPAL</Text>

        <Text style={{marginTop: 50, fontWeight: 'bold', marginLeft: 50}}>Phone</Text>
        <Text style={{marginTop: 10, marginLeft: 20}}> <FontAwesome5 name="phone" size={24} color="black" /> +977-056-490267, 9855054497</Text>
        <Text style={{marginTop: 50, fontWeight: 'bold', marginLeft: 50}}>Email</Text>
        <Text style={{marginTop: 5, marginLeft: 20}}> <MaterialIcons name="email" size={24} color="black" /> dekar2009@gmail.com</Text>
      </View>

      <View style={{height: 290, backgroundColor: '#E7E7EA', marginTop: 30, padding: 10, marginLeft: 10, marginRight: 10}}>
        <Text style={{textAlign: 'center', paddingTop: 50, fontWeight: 'bold'}}>Face Care</Text>
        <Text>Dekar is renowned for developing high quality herbal products.</Text>
        <Text>We believe that nature is the power that gives a quality in lives.</Text>
      </View>
      <FaceCare handleCartBtn={handleCartBtn} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 190 
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
