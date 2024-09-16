import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";
import blingLogo from "../assets/bling-high-resolution-logo-transparent.png"
import { initializeApp } from '@firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default function LoginScreen({navigation}) {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await AsyncStorage.setItem('userEmail', user.email);
        navigation.navigate('Home');
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
      } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const navtoSignUp=()=>{
        navigation.navigate('Signup')
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.authContainer}>
        <Text style={styles.title}>Login</Text>

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
        <View style={styles.buttonContainer}>
          <Button title={"Login"} color="#f4511e" onPress={handleAuthentication} />
        </View>

        <View style={styles.bottomContainer}>
          <Text>
            Don't have an account?
            <TouchableOpacity onPress={navtoSignUp}>
              <Text style={styles.toggleText}> Sign Up</Text>
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
        width: '100px',
        height: '100px',
        margin: 20,
      }
});