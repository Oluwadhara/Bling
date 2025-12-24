import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabComponent from "./src/components/BottomTabComponent";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import CartScreen from "./src/screens/CartScreen";
import ProductScreen from "./src/screens/ProductScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // title: "Bling Stores",
            // headerStyle: {
            //   backgroundColor: "#f4511e",
            // },
            // headerTintColor: "#fff",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },
            // headerTitleAlign: "center",
            headerShown: false
          }}
        /> */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Product" 
          component={ProductScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
