import { StyleSheet, View, Image, Animated, Easing, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Banner() {
  const bounceAnim = useRef(new Animated.Value(0)).current; // Initial value for scale: 0
  const shakeAnim = useRef(new Animated.Value(0)).current;  // Initial value for shaking

  useEffect(() => {
    // Bounce in animation
    Animated.spring(bounceAnim, {
      toValue: 1, // Scale to 1
      friction: 3,
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      // After bounce completes, start shaking
      startShaking();
    });

    // Set interval for shaking every 5 seconds
    const intervalId = setInterval(() => {
      startShaking();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const startShaking = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10, // Shake to the right
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10, // Shake to the left
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0, // Reset to original position
        duration: 50,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Animated.Image
        source={require('../assets/banner1.png')}
        style={[
          styles.banner,
          {
            transform: [
              { scale: bounceAnim }, // Bounce effect
              { translateX: shakeAnim }, // Shake effect
            ],
          },
        ]}
      />
    </View></View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "85%",
    height: 125,
    backgroundColor: "#d7a885", // Background remains fixed
    margin: 10,
    padding: 10,
  },
  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});