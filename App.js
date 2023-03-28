import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
export default function App() {
  state = {
    myState: 'Hello'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text>{this.state.myState}</Text>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50
  }
});
