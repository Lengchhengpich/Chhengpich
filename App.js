import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
  },
});
