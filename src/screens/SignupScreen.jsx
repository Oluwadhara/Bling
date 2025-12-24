import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import blingLogo from "../assets/bling-high-resolution-logo-transparent.png"
import React, { useState, useEffect } from 'react';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEAmvPaF5BmUVzReojj6qe9ILJ5wHkP-s",
  authDomain: "bling-dararocks.firebaseapp.com",
  projectId: "bling-dararocks",
  storageBucket: "bling-dararocks.appspot.com",
  messagingSenderId: "644708181553",
  appId: "1:644708181553:web:095a4250c3911f5eeb5710",
  measurementId: "G-FCKVE5QNKH"
};

const app = initializeApp(firebaseConfig);

export default function SignupScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

    const navtoLogin=()=>{
        navigation.navigate('Login')
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.authContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={styles.buttonContainer}>
          <Button title={"Sign Up"} color="#f4511e" onPress={handleAuthentication} />
        </View>

        <View style={styles.bottomContainer}>
          <Text>
            Already have an account?
            <TouchableOpacity onPress={navtoLogin}>
              <Text style={styles.toggleText}> Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <Image source={blingLogo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
    backgroundColor: "#FF9966",
  },
  buttons: {
    width: "40%",
    borderRadius: 4,
  },
  toggleText: {
    color: "#f4511e",
    textAlign: "center",
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
    resizeMode: "contain",
  }
});
