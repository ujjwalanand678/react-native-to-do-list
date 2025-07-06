import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); // Correct in React Native
  }
  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return; // ignore empty input
    }
    setCourseGoals((currentGoal) => [...currentGoal, enteredGoalText]);
    // setCourseGoals(currentCourseGoals => currentCourseGoals.concat(enteredGoalText));

    setEnteredGoalText(""); // clear input after adding;
  }
  // enteredGoalText → is a state variable that holds the text from an input box.
  // setCourseGoals → is a state setter that updates the array of goals.
  // setEnteredGoalText → clears the input box after adding the goal.
  // 1) This updates the state of the courseGoals array.
  // 2)  setCourseGoals takes a callback with the current array (currentGoal).
  // 3) ...currentGoal → spread operator to copy the existing goals.
  // 4) enteredGoalText → add the new goal at the end.
  // 5) So the new goal list is old goals + new one.
  // Note => This is better than using .push() because .push() mutates the array directly — bad practice in React.
  //         Instead, you return a new array, which React sees as a state change, so it re-renders properly.

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type Your Goal Here..."
          style={styles.inputText}
          onChangeText={goalInputHandler} // Correct: gets new text
          // User types text ➜ TextInput calls your handler ➜ handler gets the new text directly ➜ you store it with setState
          // Your goalInputHandler uses e.target.value — that’s React (web) syntax, not React Native.
          // onChangeText={(e)=>goalInputHandler(e)} //  Not valid in React Native
          // In React Native:
          // TextInput’s onChangeText gives you the new text directly — you do not get an event object like e
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <View key={index} style ={styles.goalItem}>
            <Text style ={styles.goalItemText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    // justifyContent: "center",
    // backgroundColor:"white"
  },

  inputContainer: {
    flex: 1,
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
  goalItem:{
    backgroundColor: "#5e0acc"
  },
  goalItemText:{
    color:"white"
  }
});
