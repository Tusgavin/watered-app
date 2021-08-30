import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  plantDetailsMainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  plantDeatilsHeaderContainer: {
    flex: 1.5,
  },
  plantDeatilsCommentsContainer: {
    flex: 3.8,
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
  keyboardAddingViewStyle: {
    flex: 5
  },
  writeCommentContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  commentListContainer: {
    flex: 6
  },
  inputCommentContainer: {
    flex: 5,
    paddingLeft: 20
  },
  sendCommentButtonContainer: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 10
  },
  sendCommentButton: {
    // borderRadius: 50
  },
  sendCommentIcon: {
    height: 15,
    width: 15
  }
});

export default styles;
