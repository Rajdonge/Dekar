import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>ABOUT US</Text>
      </View>
      <Text style={styles.paragraph}>
        DEKAR is renowned for developing high quality herbal products. We
        believe that nature is the peower that gives a quality in lives. Here we
        focus on to enhance the quality of our products constantly so that to
        enhance the quality of our products constantly so that to reach and
        fulfill the needs of every individuals. Dekar Herbal was established in
        2009 in Narayangrah, Nepal by Mr. Durga Prasad Gautam. It has developed
        a wide range of personal care products regarding skin care, hair care,
        sun care, face care, facial kit & body care. All of our products are
        enriched with the excellence of Ayurveda, the age-old science based on
        active natural ingredients. Dekar values its customers and their unique
        requirements so thereby, provides high quality personal care products at
        the best price.
      </Text>
      <Footer />
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#e9b14a",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  paragraph: {
    color: 'black',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
});
