import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Form extends Component {

  render() {
    return (
      <View>
        <TextInput
          placeholder="What's your next goal?"
        />
        <Button
          title="Add new goal"
        />
      </View>
    );
  }
}

export default Form;