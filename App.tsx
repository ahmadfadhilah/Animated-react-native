import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { MotiView } from '@motify/components'
import { View, Text, StyleSheet } from "react-native";
import { Easing } from "react-native-reanimated";

const _color = "#6E01EF";
const _size = 100;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((index) => {
          return <MotiView 
          from={{opacity: 1, scale: 1}}
          animate={{opacity: 1, scale: 4}}
          transition={{
            type: "timing",
            duration: 2000,
            easing: Easing.out(Easing.ease),
          }}
          key={index}
          style={[StyleSheet.absoluteFillObject, styles.dot]} />;
        })}
        <Feather name="phone-outgoing" size={32} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
