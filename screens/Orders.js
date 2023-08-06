// Orders.js (assuming it's the file where you define the Orders component)

import React from "react";
import { View, Text, FlatList } from "react-native";

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
    <View>
      <Text>Ordered Items:</Text>
      <FlatList
        data={selectedItems}
        keyExtractor={(itemIndex) => itemIndex.toString()}
        renderItem={({ item }) => {
          const selectedItem = cart[item];
          return (
            <View>
              <Text>{selectedItem.name}</Text>
              <Text>Rs. {selectedItem.price}</Text>
              <Text>Qty {selectedItem.quantity}</Text>
            </View>
          );
        }}
      />
      <Text>Total Price: Rs. {calculateTotalPrice()}</Text>
    </View>
  );
};

export default Orders;
