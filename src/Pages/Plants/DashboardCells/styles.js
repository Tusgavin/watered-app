import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   cellContainer: {
      flex: 1,
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 4
   },
   cellIcon: {
      width: 32,
      height: 32,
   }
});

export default styles;