import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [newGoal, changeText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isVisible, toggleModal] = useState(false);

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
    resetForm();
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const closeModal = () => {
    toggleModal(false);
    resetForm();
  }

  const resetForm = () => {
    changeText("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <List goals={goals} removeGoalHandler={removeGoalHandler} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => toggleModal(true)}>
          <View >
            <MaterialCommunityIcons name="plus" size={48} color="#951616" style={styles.icon} />
          </View>
        </TouchableOpacity>
      </View>

      <Form
        visible={isVisible}
        onChangeText={changeTextHandler}
        onSubmit={submitHandler}
        newGoal={newGoal}
        closeModal={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30
  },
  listContainer: {
    flex: 7
  },
  iconContainer: {
    flex: 1
  },
  icon: {
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
    backgroundColor: "#fff",
    zIndex: 100000
  }
});

export default App;
