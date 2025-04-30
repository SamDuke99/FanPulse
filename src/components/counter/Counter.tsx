import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import type { RootState } from "../../store/store";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Count: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <View style={{ height: 10 }} />
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
    </View>
  );
};
