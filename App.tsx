import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

const _color = "#6E01EF";
const _size = 100;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        <Feather name="phone-outgoing" size={32} color="#fff"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
})