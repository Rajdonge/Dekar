import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import products from "./Products";

const FaceCare = ({handleCartBtn}) => {



  return (
    <ScrollView>
      <Text style={styles.title}>Face Care Products</Text>
      {products.map((item, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.imageContainer}>
          <Image source={item.pic} style={styles.image}  />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>Rs. {item.price}</Text>
          <Text style={styles.text}>Qty {item.quantity}</Text>
          <TouchableOpacity onPress={()=>handleCartBtn(item)} style={styles.cartBtn}>
            <Text style={styles.buttonText}>ADD TO CART</Text>
          </TouchableOpacity>
          
    
          </View>
        </View>
      ))}
    
    </ScrollView>
    
  );
};

export default FaceCare;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: "center",
    padding: 20,
    backgroundColor: '#F5F3F2',
    display: 'flex'
  },
  imageContainer: {
    width: 220,
    height: 380,
    borderRadius: 5,
    backgroundColor: '#D2D2D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 250
  },
  text: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginTop: 20
  },
  cartBtn: {
        marginTop: 10,
        backgroundColor: 'royalblue',
        borderRadius: 5,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10
  }
});
