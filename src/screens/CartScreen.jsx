import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CartScreen({ navigation }) {
  const [promoCode, setPromoCode] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Airpod",
      image: require("../assets/ProductImages/airpods.png"),
      price: 57000,
      color: "1 TB",
      quantity: 1,
    },
    {
      id: 2,
      name: "MacBook",
      image: require("../assets/ProductImages/macbook.png"),
      price: 770000,
      color: "Blue",
      quantity: 1,
    },
    {
      id: 3,
      name: "Hp Laptop",
      image: require("../assets/ProductImages/laptop1.png"),
      price: 153000,
      color: "Green",
      quantity: 1,
    },
  ]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const incrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>{item.color}</Text>
        <Text style={styles.productPrice}>N{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => decrementQuantity(item.id)}
        >
          <Ionicons name="remove-outline" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => incrementQuantity(item.id)}
        >
          <Ionicons name="add-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const discount = subtotal * 0.04;
  const deliveryFee = 5.0;
  const total = subtotal - discount + deliveryFee;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={navigateBack}>
          <Ionicons name="chevron-back-outline" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <TouchableOpacity style={styles.heartButton}>
          <Ionicons name="trash-outline" size={18} color="red" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.productList}
        showsVerticalScrollIndicator={false}
      />

      {/* Promo Code */}
      <View style={styles.promoContainer}>
        <TextInput
          style={styles.promoInput}
          placeholder="Promo Code"
          value={promoCode}
          onChangeText={(text) => setPromoCode(text)}
        />
        <Text style={styles.promoApplied}>Promocode applied</Text>
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>N{subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee:</Text>
          <Text style={styles.summaryValue}>N{deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Discount:</Text>
          <Text style={styles.summaryValue}>- N{discount.toFixed(2)}</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>
          Checkout for N{total.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    borderColor: "#f2f2f2",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  heartButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    borderColor: "#f2f2f2",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  moreOptions: {
    fontSize: 18,
    color: "#000",
    fontWeight: "900",
    margin: -8,
  },
  productList: {
    flex: 1,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  productColor: {
    fontSize: 12,
    color: "#888",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  promoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  promoInput: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    borderColor: "#f2f2f2",
    borderWidth: 1,
  },
  promoApplied: {
    color: "green",
    fontWeight: "bold",
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 16,
    color: "#000",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  checkoutButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
