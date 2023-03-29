import React from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
export const Home = () => {
  state = {
    names: [
      { name: "Ben", id: 1 },
      { name: "Susan", id: 2 },
      { name: "Robert", id: 3 },
      { name: "Mary", id: 4 },
      { name: "Daniel", id: 5 },
      { name: "Laura", id: 6 },
      { name: "John", id: 7 },
      { name: "Debra", id: 8 },
      { name: "Aron", id: 9 },
      { name: "Ann", id: 10 },
      { name: "Steve", id: 11 },
      { name: "Olivia", id: 12 },
    ],
  };
  alertItemName = (item) => {
    alert(item.name);
  };
  return (
    <>
      <View>
        <ScrollView>
          {this.state.names.map((item, index) => (
            <View>
              <View key={item.id} style={styles.item}>
                <Text onPress={() => alert("ji")}>{item.name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1",
  },
});
