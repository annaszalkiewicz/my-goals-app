import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ListItem from './ListItem';

const List = (props) => {

  const renderItem = ({item}) => {
    
    return (
      <ListItem
        title={item.title}
      /> 
    )
  }

  return (
    <View>
      <FlatList
        data={props.goals}
        renderItem={renderItem}
      />
    </View>
  )
}

export default List;
