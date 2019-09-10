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
      <View style={styles.listContainer}>
        <List goals={goals} removeGoalHandler={removeGoalHandler} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="plus" size={48} color="#951616" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 30
  },
  listContainer: {
    flex: 1
  },
  iconContainer: {
    flex: 0.1
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 70,
    height: 70,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 70,
    elevation: 10,
    backgroundColor: "#fff"
    // borderWidth: 2
  }
});

export default App;
