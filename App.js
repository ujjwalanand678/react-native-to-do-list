import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
     if (enteredGoalText.trim().length === 0) {
    return; // ignore empty input
  }
  setCourseGoals(currentCourseGoal => [...currentCourseGoal, enteredGoalText]);
  setEnteredGoalText(''); // clear input after adding;
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
         <TextInput
          placeholder="Type Your Goal Here..."
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
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
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    marginBottom: 24,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 10,
  },
  goalsContainer: {
    flex: 4,
  },
});
