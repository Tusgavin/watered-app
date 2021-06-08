import React from 'react';
import { Text, Layout } from '@ui-kitten/components';

import PlantDashboard from './plantDashboard';
import PlantList from './plantList';

const Plants = (props) => {
   return (
      <Layout style={{ flex: 1 }} >
         <PlantDashboard {...props} />
         <PlantList {...props} />
      </Layout>
   )
};

export default Plants;