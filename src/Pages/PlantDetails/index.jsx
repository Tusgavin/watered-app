import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Layout,
} from '@ui-kitten/components';

import PlantDetailsHeader from './plantDetailsHeader';
import CommentsSection from './commentsSection';
import PlantDetailsActions from './plantDetailsActions';

import styles from './styles';

const PlantDetails = (props) => (
  <Layout style={styles.plantDetailsMainContainer}>
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.keyboardAddingViewStyle}
    keyboardVerticalOffset={40}>
      <PlantDetailsHeader {...props} />
      <CommentsSection {...props} />
    </KeyboardAvoidingView>
    <PlantDetailsActions {...props} />
  </Layout>
);

export default PlantDetails;
