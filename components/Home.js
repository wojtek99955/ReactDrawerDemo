import { StyleSheet, Text, View, Button } from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.mainText}>Welcome!</Text>
      <Button onPress={() => navigation.navigate("About")} title="About us" />
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 40,
    marginBottom: 20,
  },
});
