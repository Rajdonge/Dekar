import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert } from "react-native";


import HomeScreen from "./components/screens/HomeScreen";
import About from "./components/screens/About";
import ContactUs from "./components/screens/ContactUs";
import Navbar from "./components/screens/Navbar";
import Footer from "./components/screens/Footer";
import OtherProducts from "./components/screens/OtherProducts";
import Login from "./components/screens/Login";
import users from './components/data/UsersData';
import Carts from "./components/screens/Carts";
import Orders from "./components/screens/Orders";

import face_products from "./components/data/products/FaceCare";
import hair_products from "./components/data/products/HairCare";
import skin_products from "./components/data/products/SkinCare";
import new_products from "./components/data/products/NewProducts";

import FaceCareScreen from "./components/screens/FaceCareScreen";
import HairCareScreen from "./components/screens/HairCareScreen";
import SkinCareScreen from "./components/screens/SkinCareScreen";
import NewProductsScreen from "./components/screens/NewProductsScreen";

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


  const handleCartBtn = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if(existingItemIndex !== -1){
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    }else{
      setCart([...cart, {...item, quantity: 1}])
    }
    const selectedItem = face_products.find((faceItem) => faceItem.id === item.id) ||
                         hair_products.find((hairItem) => hairItem.id === item.id) ||
                         skin_products.find((skinItem) => skinItem.id === item.id) ||
                         new_products.find((newItem) => newItem.id === item.id);
    if(selectedItem){
      Alert.alert(`${selectedItem.name}, is added to cart successfully! `)
    }
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
          {()=> <FaceCareScreen handleCartBtn={handleCartBtn} cart={cart} />}
          </Stack.Screen>
          <Stack.Screen name="SkinCare">
            {
              ()=> <SkinCareScreen handleCartBtn={handleCartBtn} />
            }
          </Stack.Screen>

          <Stack.Screen name="NewProducts">
            {
              ()=> <NewProductsScreen handleCartBtn={handleCartBtn} />
            }
          </Stack.Screen>

          <Stack.Screen name="HairCare">
            {
              ()=> <HairCareScreen handleCartBtn={handleCartBtn} cart={cart} />
            }
          </Stack.Screen>
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
      </NavigationContainer>
    </>
  );
}
