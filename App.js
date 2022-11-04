import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        translucent={false}
      />
      <Text>
        App Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        modi placeat corporis esse fugit nisi minima delectus tempore quam, rem
        enim consectetur suscipit!hhv
      </Text>
    </View>
  );
};

export default App;
