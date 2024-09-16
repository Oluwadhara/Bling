import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Header from "./Header";
import { getAuth, signOut } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Categories from "./Categories";

export default function HomeScreen({ navigation, user }) {
  const auth = getAuth();

  const [email, setEmail] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const getUserEmail = async () => {
      const storedEmail = await AsyncStorage.getItem("userEmail");
      setEmail(storedEmail);
    };

    getUserEmail();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("userEmail");
      console.log("User logged out successfully!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    // <View style={styles.body}>
    //   <Header />
    //   <View style={styles.container}>
    //     <Text>Welcome, {email ? email : "User"}!</Text>
    //     <StatusBar style="auto" />
    //     <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
    //   </View>
    // </View>

    <SafeAreaView style={styles.container}>
      <Header onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height)} navigation={navigation} />
      <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingTop: headerHeight }]}>
        <Banner />
        <Categories />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
