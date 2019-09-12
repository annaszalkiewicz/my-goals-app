import React from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Form = props => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.back}>
        <MaterialCommunityIcons name="arrow-left" size={48} color="#951616" />
      </View>
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
        <View style={styles.button}>
          <Button
            title="Add new goal"
            onPress={props.onSubmit}
            color="#951616"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  back: {
    padding: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  inputContainer: {
    width: "80%",
    maxWidth: 500,
    borderBottomWidth: 2,
    borderBottomColor: "#000"
  },
  input: {
    paddingVertical: 10
  },
  button: {
    marginTop: 16
  }
});

export default Form;
