import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { store } from "./src/store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMatches } from "./src/store/actions/api";
import ScoreCard from "./src/components/scoreCard/scoreCard";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ScoreCard
          homeTeam={{ name: "Leeds", score: 7 }}
          awayTeam={{ name: "Man Utd", score: 0 }}
        />
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
