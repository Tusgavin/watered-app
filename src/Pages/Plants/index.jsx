import React from 'react';
import { Layout } from '@ui-kitten/components';

import PlantDashboard from './plantDashboard';
import PlantList from './plantList';

const Plants = (props) => (
  <Layout style={{ flex: 1 }}>
    <PlantDashboard mainProps={props} />
    <PlantList mainProps={props} />
  </Layout>
);

export default Plants;
