import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type Your Goal Here..."
          style={styles.inputText}
        />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals.....</Text>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  inputContainer: {
    
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-between",
    alignItems:"center",
    paddingBottom:24,
    borderBottomWidth : 1,
      borderColor: "#cccccc",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 10,
  },
  // goalsContainer:{
  //   flex:1,
  // }
});
