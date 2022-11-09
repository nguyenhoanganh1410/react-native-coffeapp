import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import CardItem from "./components/CardItem";
import CheckOutScreen from "./screen/CheckOutScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <CheckOutScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
