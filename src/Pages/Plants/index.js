import React from 'react';
import { Text, Layout } from '@ui-kitten/components';

import PlantDashboard from './plantDashboard';
import PlantList from './plantList';

const Plants = () => {
   return (
      <Layout style={{ flex: 1 }} >
         <PlantDashboard />
         <PlantList />
      </Layout>
   )
};

export default Plants;