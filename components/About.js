import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
