import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { store } from "./src/store/store";
import { Provider } from "react-redux";
import { Counter } from "./src/components/counter/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter></Counter>
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
