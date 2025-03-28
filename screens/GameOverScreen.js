import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title.js";
import Colors from "../constants/colors";
function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    width: "100%",
  },
});
