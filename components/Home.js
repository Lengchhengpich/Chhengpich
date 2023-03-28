import React from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
} from "react-native";
export const Home = () => {
  state = {
    names: [
      {
        id: 0,
        name: "Ben",
      },
      {
        id: 1,
        name: "Susan",
      },
      {
        id: 2,
        name: "Robert",
      },
      {
        id: 3,
        name: "Mary",
      },
    ],
  };
  alertItemName = (item) => {
    alert(item.name);
  };
  return (
    <>
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
});
