import React from 'react';
import { Layout } from '@ui-kitten/components';

import PlantDashboard from './plantDashboard';
import PlantList from './plantList';
import AddPlant from './addPlant';

const Plants = (props) => (
  <Layout style={{ flex: 1 }}>
    <PlantDashboard mainProps={props} />
    <PlantList mainProps={props} />
    <AddPlant mainProps={props} />
  </Layout>
);

export default Plants;
