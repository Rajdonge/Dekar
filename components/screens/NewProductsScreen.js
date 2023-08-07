import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions
  } from "react-native";
  import React from "react";
  import new_products from "../data/products/NewProducts";
  
  const NewProductsScreen = ({ handleCartBtn }) => {
    return (
      <ScrollView>
        <ImageBackground style={styles.new_products_banner}>
          <Image source={require('../../assets/newImages/smallbanner.jpg')}
          style={styles.new_products_banner_image}
          resizeMode = 'cover'
          />
          <View style={styles.newProductsBannerContent}>
              <Text style={{fontSize:16 ,color:'orange', fontWeight: 'bold'}}>New Products</Text>
              <Text style={styles.newProductsBannerText}>Explore Our New Products</Text>
              <TouchableOpacity style={styles.newProductsBannerButton}>
                <Text style={styles.newProductsBannerButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
        <Text style={styles.title}>New Products</Text>
        <ScrollView horizontal>
          {new_products.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.imageContainer}>
                <View style={styles.imageItemContainer}>
                  <Image source={item.pic} style={styles.image} />
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>Rs. {item.price}</Text>
                  <Text style={styles.text}>Qty {item.quantity}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleCartBtn(item)}
                  style={styles.cartBtn}
                >
                  <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    );
  };
  
  export default NewProductsScreen;
  
  const styles = StyleSheet.create({
    title: {
      fontSize: 38,
      margin: 10,
      fontWeight: "bold",
      marginTop: 30,
      textAlign: 'center'
    },
    new_products_banner_image: {
      width: Dimensions.get('window').width,
      height: 250,
      marginTop: 10
    },
    new_products_banner: {
      width: '100%',
      position: 'relative',
    },
    new_products_banner_image: {
      width: Dimensions.get('window').width,
      height: 200,
      marginTop: 10,
    },
    newProductsBannerContent: {
      position: 'absolute', 
      left: 28, 
      right: 30, 
      top: 50,
      alignItems: 'center',
    },
    newProductsBannerText: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#fff'
      
    },
    newProductsBannerButton: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    newProductsBannerButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
  
    container: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#F5F3F2",
      display: "flex",
    },
    imageContainer: {
      width: 130,
      alignItems: "center",
      justifyContent: "center",
    },
    imageItemContainer: {
      height: 230,
    },
    image: {
      width: 120,
      height: 150,
      resizeMode: "cover",
      borderRadius: 5,
    },
    text: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
    },
    cartBtn: {
      marginTop: 10,
      backgroundColor: "royalblue",
      borderRadius: 5,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
  });
  