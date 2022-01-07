/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import List from './src/components/List/List';
import Navbar from './src/components/Navbar/Navbar';
import styles from './src/styles/styles';

const App = () => {
  const [task, setTask] = useState('');
  const [tasklist, setTasklist] = useState([]);

  return (
    <View style={styles.container}>
      <Navbar
        setTask={setTask}
        task={task}
        setTasklist={setTasklist}
        tasklist={tasklist}
      />
      <ScrollView>
        <List setTasklist={setTasklist} tasklist={tasklist} />
      </ScrollView>
    </View>
  );
};

export default App;
