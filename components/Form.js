import React from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

const Form = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="What's your next goal?"
            placeholderTextColor="#000"
            value={props.newGoal}
            onChangeText={props.onChangeText}
            style={styles.input}
          />
        </View>
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
  },
  inputContainer: {
    width: '80%',
    maxWidth: 500,
    borderBottomWidth: 2,
    borderBottomColor: "#000"
  },
  input: {
    paddingVertical: 10
  }
});

export default Form;
