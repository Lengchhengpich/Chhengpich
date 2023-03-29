import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
function FirstScreen() {
  return <Home />;
}
function SecondScreen() {
  return (
    <View>
      <Text>This is SecondScreen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={FirstScreen}></Tab.Screen>
          <Tab.Screen name="About" component={SecondScreen}></Tab.Screen>
        </Tab.Navigator>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={FirstScreen}></Drawer.Screen>
        </Drawer.Navigator> */}
      </NavigationContainer>
    </>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Hello</Text>
    //   <StatusBar backgroundColor = "yellow" />
    //   <Home />
    // </View>
  );
}

export default App;

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
