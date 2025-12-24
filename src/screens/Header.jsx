import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import SearchScreen from "./SearchScreen";

export default function Header({ onLayout, navigation }) {
  const [searchText, setSearchText] = useState("");

  const navigateToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.heading}>
        <Text style={styles.text1}>Discover</Text>
        <TouchableOpacity style={styles.cartButton} onPress={navigateToCart}>
          <Ionicons
            name="cart-outline"
            size={Dimensions.get("window").width * 0.05}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <Pressable
          style={styles.fakeInput}
          onPress={() =>
            navigation.navigate("Search", { autoFocus: true })
          }
        >
          <Text style={styles.placeholderText}>Search...</Text>
        </Pressable>
        
        <Ionicons
          name="search"
          size={Dimensions.get("window").width * 0.05}
          color="#000"
        />
      </View>

      {/* <Text style={styles.displayedText}>{searchText}</Text> */}
      {/* <SearchScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: 30,
  },
  heading: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
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
    overflow: "hidden",
    borderRadius: 20,
    marginTop: -5,
    borderColor: "#f2f2f2",
    borderWidth: 2,
    borderStyle: "solid",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    width: "85%",
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 20,
  },
  fakeInput: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: "#777",
  },
});
