// Orders.js (assuming it's the file where you define the Orders component)

import React from "react";
import { View, Text, FlatList } from "react-native";
import Footer from "./Footer";

const Orders = ({ route }) => {
  const { selectedItems, cart } = route.params;

  // Function to calculate the total price of the selected items
  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (total, index) => total + cart[index].price * cart[index].quantity,
      0
    );
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>Ordered Items:</Text>
      <FlatList
        data={selectedItems}
        keyExtractor={(itemIndex) => itemIndex.toString()}
        renderItem={({ item }) => {
          const selectedItem = cart[item];
          return (
            <View style={{padding: 20}}>
              <Text style={{fontWeight: 'bold'}}>{selectedItem.name}</Text>
              <Text>Rs. {selectedItem.price}</Text>
              <Text>Qty {selectedItem.quantity}</Text>
            </View>
          );
        }}
      />
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Total Price: Rs. {calculateTotalPrice()}</Text>
    </View>
  );
};

export default Orders;
