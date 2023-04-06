import React from "react";
import {
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
export const Home = (navigation) => {
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
      <ScrollView style={styles.contianer}>
        <View style={styles.input}>
          <TextInput
            placeholder="What do you want to search for?"
            style={styles.search}
          />
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.names.map((item, index) => (
              <View>
                <View style={styles.item}>
                  <Text key={item.id} onPress={() => alert("ji")}>
                    {item.name}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View>
          <ScrollView>
            {this.state.names.map((item, index) => (
              <View>
                <View style={styles.item}>
                  <Text key={item.id} onPress={() => alert("ji")}>
                    {item.name}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    padding: 10,
  },
  search: {
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
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
