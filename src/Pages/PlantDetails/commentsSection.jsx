import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
   Layout,
   Text,
   List,
   ListItem,
   Icon,
   Input,
   Button,
   useTheme
 } from '@ui-kitten/components';

import styles from './styles';

const commentIcon = (props) => {
  return <Icon {...props} name='message-circle-outline' />
};

const sendCommentIcon = (props) => {
  const theme = useTheme();
  return <Icon {...props} fill={theme['color-success-500']}  style={styles.sendCommentIcon} name='arrowhead-right-outline' />
};

const fakeComments = new Array(10).fill(
  { comment: "Precisa de trocar a terra e colocar fertilizante", createdAt: "21/07/2021", icon: commentIcon }
);

const renderComments = ({ item, index }) => (
  <ListItem
     key={index}
     title={item.comment}
     description={item.createdAt}
     accessoryLeft={item.icon}
   />
);

const CommentsSection = () => {
  return (
    <Layout style={styles.plantDeatilsCommentsContainer}>
        <Layout style={styles.commentSectionTitleContainer}>
          <Text category="h6">Comentários</Text>
        </Layout>
        <Layout style={styles.commentListContainer}>
          <List
          data={fakeComments}
          renderItem={renderComments}
          />
        </Layout>
        <Layout style={styles.writeCommentContainer}>
          <Layout style={styles.inputCommentContainer}>
            <Input />
          </Layout>
          <Layout style={styles.sendCommentButtonContainer}>
            <Button status="success" appearance="outline" accessoryLeft={sendCommentIcon} style={styles.sendCommentButton} />
          </Layout>
        </Layout>
    </Layout>
  );
}

export default CommentsSection;