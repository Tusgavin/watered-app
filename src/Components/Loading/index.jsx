import React from 'react';
import { Layout, Spinner } from '@ui-kitten/components';

import styles from './styles.js';

const Loading = () => (
   <Layout style={styles.loadingContrainer}>
      <Spinner status='primary' />
   </Layout>
);

export default Loading;