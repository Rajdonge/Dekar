import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
    const navigation = useNavigation();
  return (
    <View style={{ height: 100, backgroundColor: "#0A0A13" }}>
      <Text style={{ color: "white", textAlign: "center", padding: 20 }}>
        All Rights Reserved &copy; Copyright Decar 2023
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text
          style={{ color: "white" }}
          onPress={() => navigation.navigate("About")}
        >
          ABOUT US
        </Text>
        <Text
          style={{ color: "white", marginLeft: 20 }}
          onPress={() => navigation.navigate("ContactUs")}
        >
          CONTACT US
        </Text>
      </View>
    </View>
  );
};
export default Footer;
