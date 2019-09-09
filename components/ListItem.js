import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ListItem = props => {

  return (
    <TouchableOpacity onPress={() => alert('Clicked!')}>
      <View style={styles.list}> 
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 5,
    padding: 16,
    backgroundColor: '#f9f9f9'
  }
});

export default ListItem;
