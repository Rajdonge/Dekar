import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>CONTACT US</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.text}>
          {" "}
          <Ionicons name="location" size={16} color="black" /> BELCHOWK-4,
          NARAYANGARH,{" "}
        </Text>
        <Text style={styles.text}>CHITWAN, NEPAL</Text>
        <Text style={styles.text}>
          {" "}
          <MaterialIcons name="email" size={16} color="black" />{" "}
          dekar2009@gmail.com
        </Text>
        <Text style={styles.text}>
          {" "}
          <FontAwesome5 name="phone" size={16} color="black" /> +977-056-490267,
          9855054497 <EvilIcons name="sc-facebook" size={20} color="white" />
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9b14a",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  locationContainer: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
