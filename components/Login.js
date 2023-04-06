import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { Component } from "react";
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginTop: 5,
          }}
          placeholder="Password"
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "blue",
            borderRadius: 5,
            marginTop: 5
          }}
          onPress={() => navigate("Home")}
        >
          <Text style={{color: 'white', padding: 10}}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
