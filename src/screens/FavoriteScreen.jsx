import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FavoriteScreen() {
  const products = [
    {
      id: 1,
      name: "AirPods",
      image: require("../assets/ProductImages/airpods.png"),
      rating: 4.7,
      price: 135000,
    },
    {
      id: 2,
      name: "MacBook",
      image: require("../assets/ProductImages/macbook.png"),
      rating: 4.9,
      price: 1560000,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Wish List</Text>
      </View>
      <View style={styles.productList}>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
        
          <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.productImage} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.productDetails}>
              <Ionicons name="star" size={12} color="#ffe564" />
              <Text style={styles.productRating}>{product.rating}</Text>
            </View>
            
          </View>
          <Text style={styles.productPrice}>N{product.price}</Text>
        </View>
      ))}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 16,
    color: "#000",
    fontWeight: "700",
  },
  text2: {
    fontSize: 12,
    color: "#ff630c",
    fontWeight: "500",
  },
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  selectedCategoryButton: {
    backgroundColor: "#ff630c",
    borderColor: "#fff",
  },
  categoryText: {
    fontSize: 12,
    color: "#000",
  },
  selectedCategoryText: {
    color: "#fff",
  },
  scrollView2: {
    paddingHorizontal: 10,
  },
  imageContainer: {
    padding: 10,
    width: 100,
    height: 100,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productContainer: {
    width: Dimensions.get("window").width / 2 - 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Adjust for better image display
  },
  productDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 11,
    color: "#aaa",
    fontWeight: "700"
  },
  productRating: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
});
