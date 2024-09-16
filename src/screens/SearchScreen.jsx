import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

export default function SearchScreen({ onLayout }) {
  const [searchText, setSearchText] = useState("");
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
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.heading}>
        <Text style={styles.text1}>Search on Bling</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Ionicons name="cart-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#000"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <Ionicons
          name="search"
          size={20}
          color="#000"
          style={styles.searchIcon}
        />
      </View>
      <SafeAreaView style={styles.searchContainer}>
        <ScrollView>
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
          </ScrollView>
          <View style={styles.productList}>
            {products.map((product) => (
              <View key={product.id} style={styles.productContainer}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.productDetails}>
                  <Ionicons name="star" size={12} color="#ffe564" />
                  <Text style={styles.productRating}>{product.rating}</Text>
                </View>
                <Text style={styles.productPrice}>N{product.price}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  heading: {
    justifyContent: "space-between",
    paddingVertical: 20,
    flexDirection: "row",
    width: "100%",
  },
  text1: {
    fontSize: 18,
    color: "#000",
    fontWeight: "500",
  },
  cartButton: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 20,
    borderColor: "#f2f2f2",
    borderWidth: 2,
    marginTop: -5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
  searchContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text2: {
    fontSize: 12,
    color: "#ff630c",
    fontWeight: "500",
  },
  scrollView: {
    paddingVertical: 10,
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
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productContainer: {
    width: Dimensions.get("window").width / 2 - 30, // Adjusts width based on screen size
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
    marginTop: 10,
  },
  productDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  productRating: {
    fontSize: 12,
    color: "#000",
    marginLeft: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    marginTop: 10,
  },
});
