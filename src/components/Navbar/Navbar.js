import {Button, TextInput, View} from 'react-native';

import React from 'react';
import styles from './styles';

const Navbar = ({setTask, task, setTasklist, tasklist}) => {
  function createTask(text) {
    setTask(text);
  }

  function addTaskToList() {
    setTasklist([
      ...tasklist,
      {
        id: Math.random(),
        task,
      },
    ]);
    setTask('');
  }
  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Name a task"
        style={styles.textInnput}
        onChangeText={text => createTask(text)}
        value={task}
      />
      <Button
        title="Add"
        color="#C9ADA7"
        onPress={addTaskToList}
        disabled={task.length === 0}
      />
    </View>
  );
};

export default Navbar;
