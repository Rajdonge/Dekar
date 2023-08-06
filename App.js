import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import FaceCare from "./screens/FaceCare";
import BodyCare from "./screens/BodyCare";
import HairCare from "./screens/HairCare";
import ContactUs from "./screens/ContactUs";
import Navbar from "./screens/Navbar";
import Footer from "./screens/Footer";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import OtherProducts from "./screens/OtherProducts";
import Login from "./screens/Login";
import users from './data/UsersData';
import Carts from "./screens/Carts";
import products from "./screens/Products";
import { Alert } from "react-native";
import Orders from "./screens/Orders";

const Stack = createStackNavigator();



export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const [cart, setCart ] = useState([]);

  const alertMessage = (itemId) => {
    const selectedItem = products.find((item) => item.id === itemId);
    if(selectedItem){
      Alert.alert(`${selectedItem.name}, is added to cart successfully!`)
    }
  }

  const handleCartBtn = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if(existingItemIndex !== -1){
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    }else{
      setCart([...cart, {...item, quantity: 1}])
    }
    alertMessage(item.id)
  }


  return (
    <>
      <NavigationContainer>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home">
            {
              ()=> <HomeScreen handleCartBtn={handleCartBtn}/>
            }
          </Stack.Screen>
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="FaceCare">
          {()=> <FaceCare handleCartBtn={handleCartBtn} cart={cart} alertMessage={alertMessage} />}
          </Stack.Screen>
          <Stack.Screen name="BodyCare" component={BodyCare} />
          <Stack.Screen name="HairCare" component={HairCare} />
          <Stack.Screen name="OtherProducts" component={OtherProducts} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="Login">
            {()=> <Login users={users} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen name="Cart">
            {()=> <Carts cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />}
          </Stack.Screen>
          <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </>
  );
}
