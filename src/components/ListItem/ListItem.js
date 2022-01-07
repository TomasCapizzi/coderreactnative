import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const ListItem = ({deleteTask, item}) => {

  const [taskCompleted, setTaskCompleted] = useState(false)

  function completeTask(){
    setTaskCompleted(!taskCompleted);
  }

  return (
    <View style={styles.taskContainer}>
      <Text style={taskCompleted ? styles.taskOK : styles.taskX}>{item.task}</Text>
      <View style={styles.btnContainer.container}>
        <TouchableOpacity
          onPress={() => deleteTask(item.id)}
          style={styles.btnContainer.deleteBtn}>
          <Text style={styles.btnContainer.deleteBtn.text}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> completeTask()}
          style={styles.btnContainer.editBtn}>
          <Text>{taskCompleted? 'Undo' : 'Ok'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;
