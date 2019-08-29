import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Form from './components/Form';
import List from './components/List';

const App = () => {

  const [newGoal, changeText] = useState('');
  const [goals, setGoals] = useState([]);

  const changeTextHandler = (inputValue) => {
    changeText(inputValue)
  };

  const submitHandler = () => {
    setGoals(currentGoals => [...currentGoals, newGoal]);
    console.log(goals);
  };

  return (
    <View style={styles.container}>
      <Form
      onChangeText={changeTextHandler}
      onSubmit={submitHandler}
      newGoal={newGoal}
      />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;