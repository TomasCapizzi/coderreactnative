import {FlatList, Text, View} from 'react-native';

import ListItem from '../ListItem/ListItem';
import React from 'react';
import styles from './styles';

const List = ({setTasklist, tasklist}) => {

  function deleteTask(id) {
    setTasklist(tasklist.filter(task => task.id !== id));
  }

  return (
    <View style={styles.tasklist}>
      <Text style={styles.tasklistTitle}>Task List</Text>
      <View style={styles.listContainer}>
        {tasklist.length > 0 ? (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={tasklist}
            renderItem={({item}) => (
              <ListItem deleteTask={deleteTask} item={item}/>
            )}
          />
        ) : (
          <Text style={styles.noTask}>No tasks yet...</Text>
        )}
      </View>
    </View>
  );
};

export default List;
