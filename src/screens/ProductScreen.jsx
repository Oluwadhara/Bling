import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductScreen({ route, navigation  }) {
  const { product } = route.params;

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* BACK HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={navigateBack}>
          <Ionicons name="chevron-back-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/* PRODUCT IMAGE */}
      <View style={styles.imageWrapper}>
        <Image source={product.image} style={styles.image} />

        {/* ROTATION INDICATOR */}
        <View style={styles.rotateIndicator}>
          <Text style={{ color: "#000" }}>⟳</Text>
        </View>
      </View>

      {/* COLOR SELECTOR */}
      <View style={styles.colorRow}>
        <Image source={product.image} style={styles.colorThumbActive} />
        <View style={styles.colorThumb} />
        <View style={styles.colorThumb} />
      </View>

      {/* NAME & PRICE */}
      <View style={styles.titleRow}>
        <View>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.sub}>Black</Text>
        </View>
        <Text style={styles.price}>₦{product.price}</Text>
      </View>

      {/* DESCRIPTION */}
      <View style={styles.descRow}>
        <Text style={styles.descTitle}>Description</Text>
      </View>

      <Text style={styles.description}>
        This is a high quality product. More details will come from Firebase later.
      </Text>

      <View style={styles.descRow}>
        <Text style={styles.descTitle}></Text>
        <Text style={styles.showMore}>Show more</Text>
      </View>

      {/* ADD BUTTON */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

function Action({ label }) {
  return (
    <View style={styles.actionItem}>
      <View style={styles.actionIcon} />
      <Text style={styles.actionText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
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

  imageWrapper: {
    alignItems: "center",
    marginVertical: 20,
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },

  rotateIndicator: {
    position: "absolute",
    bottom: -10,
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 20,
  },

  colorRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  colorThumbActive: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginHorizontal: 6,
    resizeMode: "contain",
    backgroundColor: "#f3f3f3",
  },

  colorThumb: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#ddd",
    marginHorizontal: 6,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
  },

  sub: {
    fontSize: 12,
    color: "#777",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  actionItem: {
    alignItems: "center",
    width: 70,
  },

  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#000",
    marginBottom: 5,
  },

  actionText: {
    fontSize: 12,
  },

  descRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  descTitle: {
    fontWeight: "700",
  },

  showMore: {
    color: "#999",
    fontSize: 12,
  },

  description: {
    color: "#555",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#ff630c",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: "auto",
  },

  buttonText: {
    fontWeight: "700",
    color: "#fff",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  backIcon: {
    fontSize: 26,
    fontWeight: "600",
  },
});
