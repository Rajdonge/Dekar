import { StyleSheet, Text, View, Image} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import logo from "../../assets/logo.png";
import Modal from "react-native-modal";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {


  const [visible, setVisible] = useState(false);
  
  const navigation = useNavigation();


  return (
    <>
      <Modal style={styles.modal}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        
        isVisible={visible}
        onBackdropPress={()=> setVisible(false)}
      >
        <View style={styles.menuContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Entypo
              style={styles.exitSymbol}
              name="cross"
              size={24}
              color="black"
              onPress={() => setVisible(false)}
            />
          </View>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("Home")} 
          >
            HOME
          </Text>
          <Text 
          style={styles.menuItems}
          onPress={()=> navigation.navigate("Cart")}>
            MY CART
          </Text>
          <Text style={styles.menuItems}>
            MY ORDERS
          </Text>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("About")}
          >
            ABOUT US
          </Text>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("FaceCare")}
          >
            FACE CARE
          </Text>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("SkinCare")}
          >
            SKIN CARE
          </Text>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("HairCare")}
          >
            HAIR CARE
          </Text>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("NewProducts")}
          >
            NEW PRODUCTS
          </Text>
          <Text
            style={styles.menuItems}
            onPress={()=>navigation.navigate("ContactUs")}
          >
            CONTACT US
          </Text>

            {
              isLoggedIn ? (
          <Text
          style={styles.menuItems}
            onPress={()=>setIsLoggedIn(false)}
          >
            LOGOUT
          </Text>
              ) : (
                <Text
                style={styles.menuItems}
            onPress={()=>navigation.navigate("Login")}
          >
            LOGIN
          </Text>
              )
            }

        </View>
      </Modal>

      <View style={styles.container}>
        <Text style={styles.text}>
          {" "}
          <Ionicons name="location" size={16} color="white" /> BELCHOWK-4,
          NARAYANGARH,{" "}
        </Text>
        <Text style={styles.text}>CHITWAN, NEPAL</Text>
        <Text style={styles.text}>
          {" "}
          <MaterialIcons name="email" size={16} color="white" />{" "}
          dekar2009@gmail.com
        </Text>
        <Text style={styles.text}>
          {" "}
          <FontAwesome5 name="phone" size={16} color="white" /> +977-056-490267,
          9855054497 <EvilIcons name="sc-facebook" size={20} color="white" />
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image source={logo} style={{ width: 120, height: 50 }} />
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Ionicons
          name="menu-outline"
          size={24}
          color="black"
          onPress={() => setVisible(true)}
        />
      </View>
    </>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  modal: {
    width: 300,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    backgroundColor: "white",
  },
  container: {
    flex: .6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#0A0A13",
  },
  menuContainer: {
    paddingLeft: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40
  },
  logo: {
    width: 120, 
    height: 50,
  },
  exitSymbol: {
    marginLeft: 80
  },
menuItems: {
  paddingTop: 30
},
  text: {
    color: 'white',
    paddingBottom: 10
  }
});
