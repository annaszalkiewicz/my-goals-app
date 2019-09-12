import React from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

const Form = props => {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  }
});

export default Form;
