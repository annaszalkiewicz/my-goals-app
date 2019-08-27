import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Form extends Component {

  submitHandler = () => {
    alert('Button pressed');
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="What's your next goal?"
        />
        <Button
          title="Add new goal"
          onPress={this.submitHandler}
        />
      </View>
    );
  }
}

export default Form;