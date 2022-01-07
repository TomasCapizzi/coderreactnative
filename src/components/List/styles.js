import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tasklist: {
    width:'100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  tasklistTitle: {
    fontSize: 35,
    margin: 30,
    color: '#F2E9E4',
  },
  listContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  noTask: {
    fontSize: 20,
    color:'#F2E9E4'
  }
});

export default styles;