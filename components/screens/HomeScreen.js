import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Footer from "./Footer";
import SkinCareScreen from "./SkinCareScreen";
import HairCareScreen from "./HairCareScreen";
import FaceCareScreen from "./FaceCareScreen";
import NewProductsScreen from "./NewProductsScreen";

const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ handleCartBtn }) => {
  const images = [
    require("../../assets/Neem.png"),
    require("../../assets/bn1.png"),
    require("../../assets/bn2.jpg"),
    require("../../assets/Azclear-Ego-banner-desktop.jpg")
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

  const renderProduct = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={[images[currentIndex]]}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
        />

        <View style={styles.dekar_detail}>
          <View style={styles.dekar}>
            <Image
              source={require("../../assets/logo/mapLocator.png")}
              style={styles.logo}
            />
            <Text style={styles.dekar_detail_text}> Address </Text>
            <Text numberOfLines={4} style={styles.dekar_content}>
              BELCHOWK-4, NARAYANGARH, CHITWAN, NEPAL
            </Text>
          </View>
          <View style={styles.dekar}>
            <Image
              source={require("../../assets/logo/phone.png")}
              style={styles.logo}
            />
            <Text style={styles.dekar_detail_text}> Phone </Text>
            <Text style={styles.dekar_content}>+977-572507, 9855054497</Text>
          </View>
          <View style={styles.dekar}>
            <Image
              source={require("../../assets/logo/mail.png")}
              style={styles.logo}
            />
            <Text style={styles.dekar_detail_text}> Email </Text>
            <Text numberOfLines={1} style={{ fontSize: 11 }}>
              dekar2009@gmail.com
            </Text>
          </View>
        </View>
        

        <NewProductsScreen handleCartBtn={handleCartBtn} />

        {/* view all product button */}
        <View style={styles.viewAllProductButton}>
          <TouchableOpacity style={styles.productButton}>
            <Text style={styles.productButtonText}>View all product</Text>
          </TouchableOpacity>
        </View>

        <SkinCareScreen handleCartBtn={handleCartBtn} />

        {/* view all product button */}
        <View style={styles.viewAllProductButton}>
          <TouchableOpacity style={styles.productButton}>
            <Text style={styles.productButtonText}>View all product</Text>
          </TouchableOpacity>
        </View>

        <HairCareScreen handleCartBtn={handleCartBtn} />
        {/* view all product button */}
        <View style={styles.viewAllProductButton}>
          <TouchableOpacity style={styles.productButton}>
            <Text style={styles.productButtonText}>View all product</Text>
          </TouchableOpacity>
        </View>

        <FaceCareScreen handleCartBtn={handleCartBtn} />
        {/* view all product button */}
        <View style={styles.viewAllProductButton}>
          <TouchableOpacity style={styles.productButton}>
            <Text style={styles.productButtonText}>View all products</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    display: "flex",
  },
  slide: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  image: {
    width: "100%",
    height: 190,
  },
  dekar_detail: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dekar: {
    alignItems: "center",
    justifyContent: "center",
  },
  dekar_detail_text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 30,
  },
  dekar_content: {
    fontSize: 11,
    width: 90,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    borderRadius: 5,
  },
  item: {
    padding: 10,
    margin: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
  title_desc: {
    width: 350,
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  p_title: {
    fontSize: 38,
    fontWeight: "bold",
  },
  new_produt: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  small_banner_image: {
    width: Dimensions.get("window").width,
    height: 250,
    marginTop: 10,
  },
  small_banner: {
    width: "100%",
    position: "relative",
  },
  small_banner_image: {
    width: Dimensions.get("window").width,
    height: 200,
    marginTop: 10,
  },
  bannerContent: {
    position: "absolute",
    left: 28,
    right: 30,
    top: 60,
    alignItems: "center",
  },
  bannerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bannerButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bannerButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  productContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  productButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: 120,
    height: 40,
  },
  productButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
  },
  viewAllProductButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: 35,
  },
});

export default HomeScreen;
