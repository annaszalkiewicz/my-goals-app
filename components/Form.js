import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Form = () => {

  const [textInput, changeText] = useState('');

  const changeTextHandler = (inputValue) => {
    changeText(inputValue)
  }

  return (
    <View>
      <TextInput
        placeholder="What's your next goal?"
        value={textInput}
        onChangeText={changeTextHandler}
      />
      <Button title="Add new goal" onPress={submitHandler} />
    </View>
  );
};

export default Form;