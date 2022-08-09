import { MotiView } from "@motify/components";
import * as React from "react";
import { View, Text } from "react-native";

const LoadingIndicator = ({size} : {size: number}) =>{
  return <MotiView 
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      borderWidth: size / 10,
      borderColor: '#fff',
      shadowColor: '#fff',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 10,
    }}
  />
}

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}
