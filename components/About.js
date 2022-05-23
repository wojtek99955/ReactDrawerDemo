import { StyleSheet, Text, View, Button } from "react-native";

function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>About us!</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        voluptas, cupiditate, laborum dolores sint magni saepe earum blanditiis
        optio velit, labore corporis. Laudantium architecto nemo amet deleniti
        vero, corporis illum?
      </Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 40,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});
