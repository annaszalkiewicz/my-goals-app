import React from "react";
import { View, TextInput, Button, Modal } from "react-native";

const Form = props => {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View>
        <TextInput
          placeholder="What's your next goal?"
          value={props.newGoal}
          onChangeText={props.onChangeText}
        />
        <Button title="Add new goal" onPress={props.onSubmit} />
      </View>
    </Modal>
  );
};

export default Form;
