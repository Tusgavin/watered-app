import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  plantDetailsMainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  plantDeatilsHeaderContainer: {
    flex: 1.6,
  },
  plantDeatilsCommentsContainer: {
    flex: 3.5,
  },
  plantDetailsActionContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  plantDeatilsHeaderInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  goBackIcon: {
    width: 25,
    height: 25,
  },
  commentSectionTitleContainer: {
    alignItems: 'center',
    marginBottom: '3.5%',
    marginTop: '2%',
 },
  plantAvatar: {
   height: 75,
   width: 75 
  },
  cellIcon: {
    width: 32,
    height: 32,
  },
  actionButton: {
    borderRadius: 50
  }
});

export default styles;
