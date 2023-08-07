import { StyleSheet, Text, View, Image, ScrollView,TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";


const CheckBox = ({checked, onChange}) => {
  return(
    <View style={styles.checkboxContainer}>
      <TouchableOpacity style={[styles.checkbox, checked ? styles.checkboxChecked : null]} onPress={onChange}>
      {checked ? <Text style={styles.checkmark}>✓</Text> : null}
    </TouchableOpacity>
    </View>
  )
}

const Carts = ({ cart, setCart, isLoggedIn }) => {

  const navigation = useNavigation();

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const selectedItemsTotalPrice = selectedItems.reduce((total, index) => {
      const item = cart[index];
      return total + item.price * item.quantity;
    }, 0);
    console.log("Total: Rs ", selectedItemsTotalPrice);
  }, [selectedItems, cart]);

  const handleCheckout = () => {
    if (! isLoggedIn){
      navigation.navigate("Login");
      Alert.alert("Please login to your account to proceed Check out operation")
      return;
    }else if(selectedItems.length > 0){
      const updatedCart = cart.filter((item, index) => !selectedItems.includes(index));
      setCart(updatedCart);
      navigation.navigate("Orders", {selectedItems, cart})
      setSelectedItems([]);
      Alert.alert("Purchased successfully, check your orders list.");
    }
  };


  

  const handleToggleItem = (itemIndex) => {
    if(selectedItems.includes(itemIndex)){
      setSelectedItems(selectedItems.filter((index) => index !== itemIndex));
    }else{
      setSelectedItems([...selectedItems, itemIndex]);
    }
  }

  const handlePlusBtn = (itemIndex) => {
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity += 1;
    setCart(updatedCart);
  }

  const handleMinusBtn = (itemIndex) => {
    const updatedCart = [...cart];
    updatedCart[itemIndex].quantity -= 1;
    if(updatedCart[itemIndex].quantity <=0){
      updatedCart.splice(itemIndex, 1);
    }
    setCart(updatedCart);
  }

  return (
    <>
    <ScrollView>
      <Text style={styles.title}>Shopping Cart:</Text>
      <View style={styles.container}>
        {cart.length === 0 ? (
          <Text style={styles.emptyCart}>Your cart is empty.</Text>
        ) : (
          cart.map((item, index) => (
            <View key={index} style={styles.cartItem}>

              <CheckBox label="" checked={selectedItems.includes(index)} onChange={()=> handleToggleItem(index)} />

              <Image source={item.pic} style={{ width: 100, height: 100 }} />
              <View style={styles.textContainer}>
              <Text>{item.name}</Text>
              <Text>Rs. {item.price}</Text>
              <Text>Qty {item.quantity}</Text>
              <View style={styles.buttonContainer}>
              <Text style={styles.button} onPress={()=>handlePlusBtn(index)}>+</Text>
              <TextInput value={item.quantity.toString()} style={styles.inputText} editable={false} />
              <Text style={styles.button} onPress={()=> handleMinusBtn(index)}>-</Text>
              </View>
              </View>
            </View>
          ))
        )}
      </View>
      { selectedItems.length > 0 && (
    <View style={styles.checkout}>
      <Text>Total Price: Rs. {selectedItems.reduce((total, index) => total + cart[index].price * cart[index].quantity, 0)}</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
        <Text style={styles.text}>CHECK OUT</Text>
        </TouchableOpacity>
    </View>
)}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#CCCCCC",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
  },
  emptyCart: {
    textAlign: "center",
    marginTop: 20,
  },
  textContainer: {
    textAlign: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  buttonContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -95
  },
  button: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 10, 
    paddingRight: 10, 
    backgroundColor: '#0A0A13',
  },
  inputText: {
    backgroundColor: 'grey',
    width: 30,
    height: 20,
    textAlign: 'center'
  },
  checkboxContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#000',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 16,
  },
  checkoutBtn: {
    backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  checkout: {
    height: 100,
    backgroundColor: 'royalblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  text: {
    color: 'white'
  }
});

export default Carts;
