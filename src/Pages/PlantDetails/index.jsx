import React from 'react';
import {
  Layout,
} from '@ui-kitten/components';

import PlantDetailsHeader from './plantDetailsHeader';
import CommentsSection from './commentsSection';
import PlantDetailsActions from './plantDetailsActions';

import styles from './styles';

const PlantDetails = (props) => (
  <Layout style={styles.plantDetailsMainContainer}>
    <PlantDetailsHeader {...props} />
    <CommentsSection {...props} />
    <PlantDetailsActions {...props} />
  </Layout>
);

export default PlantDetails;
