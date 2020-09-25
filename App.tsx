import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";

const AuthenticationNavigator = () => {
  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
