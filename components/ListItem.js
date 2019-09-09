import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ListItem = props => {

  return (
    <TouchableOpacity onPress={() => alert('Clicked!')}>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
