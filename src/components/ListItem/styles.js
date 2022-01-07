import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    display:'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskX: {
    width: '60%',
    padding: 5,
    fontSize: 20,
    color: '#C9ADA7',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  taskOK: {
    width: '60%',
    padding: 5,
    fontSize: 20,
    color: '#f2e9e4',
    marginBottom: 5,
    textTransform: 'uppercase',
    textDecorationLine: 'line-through'
  },
  btnContainer: {
    container:{
      display: 'flex',
      flexDirection: 'row',
      width: '40%'
    },
    deleteBtn: {
      backgroundColor: '#9A8C98',
      width: '50%',
      height: 30,
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
      text: {
        color: '#22223B',
        textAlign: 'center',
      },
    },
    editBtn: {
      backgroundColor: '#c9ada7',
      display:'flex',
      alignItems:'center',
      justifyContent: 'center',
      width: '50%',
      height: 30,
      text: {
        color: '#22223B',
        textAlign: 'center',
      },
    },
  },
});

export default styles;