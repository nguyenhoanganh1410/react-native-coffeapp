import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import imageBg from "../../images/bg-coffe.jpg";

import { Button, Text } from "@react-native-material/core";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBg}
        resizeMode="stretch"
        style={styles.image}
      >
        <Text
          variant="h1"
          style={{
            color: "white",
            fontSize: 48,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Coffe so good, your tast buds will love it.
        </Text>
        <Text
          variant="h1"
          style={{
            color: "#fff",
            fontSize: 14,
            textAlign: "center",
            paddingVertical: 14,
          }}
        >
          Coffe so good, your tast buds will love it.
        </Text>
        <Button
          style={{
            backgroundColor: "#E6CBA8",
            paddingVertical: 10,
          }}
          title="Get started"
          onPress={() => alert("🎉🎉🎉")}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,

    justifyContent: "flex-end",
    paddingHorizontal: 28,
    paddingVertical: 56,
  },
});
