import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import face_products from "../data/products/FaceCare";
import Footer from "./Footer";


const FaceCareScreen = ({ handleCartBtn }) => {
  return (
    <ScrollView>
      <Text style={styles.title}>Face Care Products</Text>
        <ScrollView horizontal>
          {face_products.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.imageContainer}>
                <View style={styles.imageItemContainer}>
                <Image source={item.pic} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>Rs. {item.price}</Text>
                <Text style={styles.text}>Qty {item.quantity}</Text>
                </View>
                <View>
                <TouchableOpacity
                  onPress={() => handleCartBtn(item)}
                  style={styles.cartBtn}
                >
                  <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
    </ScrollView>
  );
};

export default FaceCareScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    margin: 10,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: 'center'
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
    height: 230
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
