import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  plantDetailsMainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  plantDeatilsHeaderContainer: {
    flex: 1.8,
  },
  plantDeatilsCommentsContainer: {
    flex: 4,
    marginBottom: 15
  },
  plantDetailsActionContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
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
  },
  writeCommentContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  commentListContainer: {
    flex: 1
  },
});

export default styles;
