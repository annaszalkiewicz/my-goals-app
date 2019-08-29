import React from "react";
import { View, TextInput, Button } from "react-native";

const Form = (props) => {

  return (
    <View>
      <TextInput
        placeholder="What's your next goal?"
        value={props.newGoal}
        onChangeText={props.onChangeText}
      />
      <Button title="Add new goal" onPress={props.onSubmit} />
    </View>
  );

};

export default Form;