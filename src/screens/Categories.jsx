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

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dummy data for categories, replace with data fetched from Firebase
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Smartphones" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Laptop" },
    { id: 5, name: "Beauty" },
    { id: 6, name: "Sports" },
    { id: 7, name: "Toys" },
    { id: 8, name: "Books" },
  ];

  // Dummy data for products
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
      price: 135000,
    },
    {
      id: 3,
      name: "HP Laptop",
      image: require("../assets/ProductImages/laptop1.png"),
      rating: 4.6,
      price: 135000,
    },
    {
      id: 4,
      name: "Dell Laptop",
      image: require("../assets/ProductImages/laptop2.png"),
      rating: 4.4,
      price: 135000,
    },
    {
      id: 5,
      name: "Iphone 11 pro",
      image: require("../assets/ProductImages/phone2.png"),
      rating: 4.3,
      price: 135000,
    },
    {
      id: 6,
      name: "Samsung S22 Ultra",
      image: require("../assets/ProductImages/phone3.png"),
      rating: 4.8,
      price: 135000,
    },
    {
      id: 7,
      name: "Tecno Camon 17",
      image: require("../assets/ProductImages/phone3.png"),
      rating: 4.2,
      price: 135000,
    },
    {
      id: 8,
      name: "Speakers",
      image: require("../assets/ProductImages/speaker2.png"),
      rating: 4.6,
      price: 135000,
    },
    {
      id: 9,
      name: "Dumm bell speakers",
      image: require("../assets/ProductImages/speaker1.png"),
      rating: 4.2,
      price: 135000,
    },
    {
      id: 10,
      name: "Luxury speakers",
      image: require("../assets/ProductImages/speakers.png"),
      rating: 4.4,
      price: 135000,
    },
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Categories</Text>
        <Pressable>
          <Text style={styles.text2}>See all</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {categories.map((category) => (
          <Pressable
            key={category.id}
            onPress={() => handleCategoryPress(category)}
            style={[
              styles.categoryButton,
              selectedCategory === category.name &&
                styles.selectedCategoryButton,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category.name &&
                  styles.selectedCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView><View style={styles.productList}>
      {products.map((product) => (
        <View style={styles.productContainer}>
        
          <View key={product.id} style={styles.imageContainer}>
            <Image source={product.image} style={styles.productImage} />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.productDetails}>
              <Ionicons name="star" size="12px" color="#ffe564" />
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
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text1: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
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
