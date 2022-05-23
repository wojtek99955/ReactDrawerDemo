import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.mainText}>Welcome!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        title="About us"
        style={styles.button}
      >
        <Text style={styles.textBtn}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
  textBtn: {
    fontSize: 20,
    color: "white",
  },
});
