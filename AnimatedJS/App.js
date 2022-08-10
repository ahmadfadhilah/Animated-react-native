import React from "react";
import { View, Text, Animated, PanResponder } from "react-native";

export default function App() {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (e, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },

    onPanResponderRelease: () => {
      
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    },
  });
  
  const rotate = position.x.interpolate({
    inputRange: [0, 90],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        {...pan.panHandlers}
        style={{
          height: 80,
          width: 80,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#61dafb",
          borderRadius: 4,
          transform: [
            { translateX: position.x },
            { translateY: position.y },
            { rotate: rotate },
          ],
        }}
      >
        <Text>Halo</Text>
      </Animated.View>
    </View>
  );
}
