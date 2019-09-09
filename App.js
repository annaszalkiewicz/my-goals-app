import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [newGoal, changeText] = useState("");
  const [goals, setGoals] = useState([]);

  const changeTextHandler = inputValue => {
    changeText(inputValue);
  };

  const submitHandler = () => {
    setGoals(currentGoals => [
      ...currentGoals,
      {
        title: newGoal,
        key: Math.random().toString()
      }
    ]);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Form
        onChangeText={changeTextHandler}
        onSubmit={submitHandler}
        newGoal={newGoal}
      />
      <List goals={goals} removeGoalHandler={removeGoalHandler} />
      <TouchableOpacity>
        <MaterialCommunityIcons name="plus" size={62} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 30
  }
});

export default App;
