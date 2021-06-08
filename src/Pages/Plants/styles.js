import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   plantDashboardMainContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
   },
   plantListMainContainer: {
      flex: 6,
   },
   cellIcon: {
      width: 32,
      height: 32,
   },
   plantButtonContainer: {
      flexDirection: 'row'
   },
   plantListItemText: {
      marginLeft: '5%'
   }
});

export default styles;