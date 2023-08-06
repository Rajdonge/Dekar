import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Alert } from "react-native";


import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import Navbar from "./screens/Navbar";
import Footer from "./screens/Footer";
import OtherProducts from "./screens/OtherProducts";
import Login from "./screens/Login";
import users from './data/UsersData';
import Carts from "./screens/Carts";
import Orders from "./screens/Orders";

import face_products from "./components/products/FaceCare";
import hair_products from "./components/products/HairCare";
import skin_products from "./components/products/SkinCare";

import FaceCareScreen from "./screens/FaceCareScreen";
import HairCareScreen from "./screens/HairCareScreen";
import SkinCareScreen from "./screens/SkinCareScreen";
import NewProductsScreen from "./screens/NewProductsScreen";
import new_products from "./components/products/NewProducts";

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
