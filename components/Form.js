import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Form = () => {

  const [newGoal, changeText] = useState('');
  const [goals, setGoals] = useState([]);

  const changeTextHandler = (inputValue) => {
    changeText(inputValue)
  };

  const submitHandler = () => {
    setGoals(currentGoals => [...currentGoals, newGoal]);
  };

  return (
    <View>
      <TextInput
        placeholder="What's your next goal?"
        value={newGoal}
        onChangeText={changeTextHandler}
      />
      <Button title="Add new goal" onPress={submitHandler} />
    </View>
  );
};

export default Form;